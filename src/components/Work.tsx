import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { projectContent } from '../assets/data';
import Portfolio from '../assets/Portfoliozdj.png';
import musicShop from '../assets/musicshop2.jpg';
import pomodoro from '../assets/pomodoro1.jpg';
import Project from './Project';
import { useMediaQuery } from '@mui/material';

const Work = () => {
	const isDesktop = useMediaQuery('(min-width:600px)');

	const leftVariants = isDesktop
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
					x: -0,
				},
				whileInView: {
					opacity: 1,
					x: 0,
				},
		  };

	const rightVariants = isDesktop
		? {
				initial: {
					opacity: 0,
					x: 200,
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
		<div id='work' className=' bg-[#252A34] h-2000px'>
			<div className='max-w-[1240px] text-center  mx-auto md:pl-20 p-4 py-16'>
				<h1 className=' text-2xl sm:text-4xl font-bold text-center border-[#FF2E63] inline  border-b-4 text-white'>
					{t('Projects.1')}
				</h1>
				<p className='text-center text-sm sm:text-xl  text-white py-8'>
					{' '}
					{t('Below.1')}
				</p>
				<div className='grid md:grid-cols-1 gap-12'>
					<motion.div
						variants={rightVariants}
						initial={rightVariants.initial}
						whileInView={rightVariants.whileInView}
						transition={{ delay: 0.4, duration: 1 }}>
						<Project img={pomodoro} title='Pomodoro' url='/Pomodoro' />
					</motion.div>
					<motion.div
						variants={leftVariants}
						initial={leftVariants.initial}
						whileInView={leftVariants.whileInView}
						transition={{ delay: 0.4, duration: 1 }}>
						<Project img={musicShop} title='Music Shop' url='/MusicShop' />
					</motion.div>
					<motion.div
						variants={rightVariants}
						initial={rightVariants.initial}
						whileInView={rightVariants.whileInView}
						transition={{ delay: 0.4, duration: 1 }}>
						<Project img={Portfolio} title='Portfolio' url='/Portfolio' />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Work;
