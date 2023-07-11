import React from 'react';
import { HiArrowNarrowRight, HiArrowNarrowUp } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
const Home = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		const element = document.getElementById('work');
		if (element) {
			element.scrollIntoView({ behavior: 'instant' });
		}
	};

	const [text] = useTypewriter({
		words: ['Junior React Developer', 'Junior JavaScript Developer'],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});

	const isDesktop = useMediaQuery('(min-width:600px)');

	const variants = isDesktop
		? {
				initial: {
					opacity: 0,
					x: -300,
				},
				whileInView: {
					opacity: 1,
					x: 0,
				},
		  }
		: {
				initial: {
					opacity: 0,
					x: 0,
				},
				whileInView: {
					opacity: 1,
					x: 0,
				},
		  };

	const { t, i18n } = useTranslation();
	return (
		<div id='home' className='  h-screen bg-[#252A34] text-gray-300'>
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<motion.div
					variants={variants}
					initial={variants.initial}
					whileInView={variants.whileInView}
					transition={{ delay: 0.4, duration: 1 }}>
					<motion.p
						variants={variants}
						initial={variants.initial}
						whileInView={variants.whileInView}
						transition={{ delay: 0.4, duration: 1 }}
						className=' text-[#FF2E63] text-sm sm:text-3xl  font-bold tracking-wide'>
						{t('Greeting.1')}
					</motion.p>
					<h1 className=' max-w-[1000px] text-sm sm:text-4xl mb-2  font-bold text-[#ffffff] tracking-wide'>
						{t('Name.1')}
					</h1>
					<h2 className='text-sm sm:text-4xl font-bold-400 text-[#ffffff] tracking-wide'>
						Aspirant {text}
						<Cursor
							cursorBlinking='false'
							cursorStyle='| '
							cursorColor='#FF2E63'
						/>
					</h2>
					<motion.p
						variants={variants}
						initial={variants.initial}
						whileInView={variants.whileInView}
						transition={{ delay: 0.4, duration: 1 }}
						className='text-[#ffffff] text-sm sm:text-xl py-4 max-w tracking-wide opacity-80'>
						{t('Specialization.1')}
					</motion.p>
					<div>
						<button
							onClick={handleClick}
							className=' text-[#ffffff] h-[20px]  sm:h-[70px] group border-2 px-6 py-3 my-2 text-xs sm:text-xl flex items-center hover:bg-[#FF2E63] hover:text-[#ffffff] hover:border-[#ffffff]'>
							{t('Projects.1')}
							<span className='group-hover:rotate-90 duration-200'>
								<HiArrowNarrowRight className='ml-3' />
							</span>
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
