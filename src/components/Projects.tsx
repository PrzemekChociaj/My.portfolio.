import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimCursor from './AnimCursor';
import Navbar from './Navbar';
import ProjectsNavbar from './ProjectsNavbar';
import config from './projectData.json';
import { projects } from '../assets/data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { SwiperSlide } from 'swiper/react';
import i18next from 'i18next';

const slides = [
	{
		url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
	},
	{
		url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
	},
	{
		url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
	},

	{
		url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
	},
	{
		url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
	},
];

const Projects = ({ array, title, desc }) => {
	const { t, i18n } = useTranslation();
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? array.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === array.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};



	return (
		<>
			<AnimCursor />
			<ProjectsNavbar />
			<div className='bg-[#252A34] h-full grid grid-col-2 w-full gap-1 justify-center'>
				<div className='mt-32  text-white text-center '>
					<h1 className='  inline border-b-2 border-[#FF2E63] text-center sm:text-5xl lg:text-3xl '>
						{title}
					</h1>
					<p className='mt-12 opacity-80 max-w-[1000px] mx-auto lg:text-lg sm:text-md '>
						{desc}
					</p>
				</div>
				<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
					<div
						style={{ backgroundImage: `url(${array[currentIndex].url})` }}
						className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat  duration-500'></div>

					<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>

					<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
						<BsChevronCompactRight onClick={nextSlide} size={30} />
					</div>
					<div className='flex top-4 justify-center py-2'>
						{array.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='text-2xl cursor-pointer'>
								<RxDotFilled />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
