import React from 'react';

import HTML from '../assets/html.png';
import ReactLogo from '../assets/react.png';
import JavaScript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import CSS from '../assets/css.png';
import MaterialUI from '../assets/logo.png';
import ReduxLogo from '../assets/redux.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills = () => {

	const {t, i18n } =useTranslation()
	return (
		<div id='skills' className='w-full h-screen  bg-[#252A34] text-[#d4d4d4]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<motion.div
					initial={{ opacity: 0}}
					whileInView={{ opacity: 1}}
					transition={{ delay: 0.5 }}>
					<motion.div initial={{ opacity: 0 }}
					whileInView={{ opacity: 1}}
					transition={{ delay: 0.5, duration: 2 }}>
						<p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] '>
							{t("Skills.1")}
						</p>
						<p className='py-4'>{t("SkillsIntro.1")}</p>
					</motion.div>

					<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
							<p className='my-4'>HTML</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
							<p className='my-4'>CSS</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
							<p className='my-4'>JAVASCRIPT</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={ReactLogo} alt='HTML icon' />
							<p className='my-4'>REACT</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={GitHub} alt='HTML icon' />
							<p className='my-4'>GITHUB</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
							<p className='my-4'>TAILWIND</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={MaterialUI} alt='HTML icon' />
							<p className='my-4'>Material UI</p>
						</div>
						<div className='shadow-md shadow-[#040c16] font-bold  hover:scale-110 duration-500'>
							<img className='w-20 mx-auto' src={ReduxLogo} alt='HTML icon' />
							<p className='my-4'>REDUX</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Skills;
