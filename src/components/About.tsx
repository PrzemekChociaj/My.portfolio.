import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Profilowe from '../assets/Profilowe.jpg'
import { useMediaQuery } from '@mui/material';

const About = () => {
	const [move, setMove] = useState();

	const isDesktop = useMediaQuery('(min-width:600px)');

	const variants = isDesktop
	? {
 initial: {
	opacity:  0,
	x: -300,
 },
 whileInView: {
opacity: 1, x:0,
 },
}
 : {
	initial: {
		opacity: 0,
		x:-30
	},
	whileInView: {
opacity: 1,
x: 0
	}
 }


	const { t, i18n } = useTranslation();

	return (
		<div id='about' className='w-full h-screen bg-[#252A34] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<motion.div
				variants={variants}
				initial={variants.initial}
				whileInView={variants.whileInView}
					transition={{ delay: 0.4, duration: 1 }}>
					<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
						<div className='sm:text-right pb-8 pl-4'>
							<p className='text-4xl font-bold inline border-b-4   border-[#FF2E63]'>
								{t('About.1')}
							</p>
						</div>
					</div>
					<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
						<div className=' text-4xl font-bold'>
							<p>{t('secondIntroduction.1')} </p>
							<motion.img
					variants={variants}
					initial={variants.initial}
					whileInView={variants.whileInView}
								transition={{ delay: 0.4, duration: 1 }}
								className='max-w-[240px] relative top-5  left-24 sm:left-52 border-2 rounded-full    border-solid '
								src={Profilowe}
								alt=''
							/>
						</div>

						<div>
							<p className='text-white opacity-80 '>{t('AboutMe.1')}</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
