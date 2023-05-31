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
import Harold from '../assets/Harold.png';
import Portfolio from '../assets/Portfoliozdj.png';
import musicShop from '../assets/musicshop2.jpg';
import pomodoro from '../assets/pomodoro1.jpg';
import Project from './Project';

const Work = () => {
	const { t, i18n } = useTranslation();
	return (
		<div id='work' className=' bg-[#252A34] h-2000px'>
			<div className='max-w-[1240px] text-center  mx-auto md:pl-20 p-4 py-16'>
				<h1 className='text-4xl font-bold text-center border-[#FF2E63] inline  border-b-4 text-white'>
					{' '}
					Projects
				</h1>
				<p className='text-center text-white py-8'>
					{' '}
					Poniżej można zobaczyć niektóre z projektów, które stworzyłem.
				</p>
				<div className='grid md:grid-cols-1 gap-12'>
					<Project img={pomodoro} title='Pomodoro' url='/Pomodoro' />
					<Project img={musicShop} title='Music Shop' url='/MusicShop' />
					<Project img={Portfolio} title='Portfolio' url='/Portfolio' />
				</div>
			</div>
		</div>
	);
};

export default Work;
