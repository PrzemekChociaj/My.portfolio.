import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimCursor from './AnimCursor';
import Navbar from './Navbar';
import ProjectsNavbar from './ProjectsNavbar';
import { projects } from '../assets/data';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { SwiperSlide } from 'swiper/react';
import i18next from 'i18next';

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
					<motion.h1
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1, duration: 1 }}
						className='  inline border-b-2 border-[#FF2E63] text-center text-3xl sm:text-5xl  '>
						{title}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1, duration: 2 }}
						className='mt-12 opacity-80 max-w-[500px] sm:max-w-[1000px]  mx-auto text-xs sm:text-xl '>
						{desc}
					</motion.p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 1, duration: 2 }}
					className='  sm:max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
					<div
						style={{ backgroundImage: `url(${array[currentIndex].url})` }}
						className='w-full h-full   rounded-2xl sm:bg-center bg-contain bg-no-repeat  duration-500'></div>

					<div className='hidden group-hover:block absolute top-[20%] -translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>

					<div className='hidden group-hover:block absolute top-[20%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
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
				</motion.div>
			</div>
		</>
	);
};

export default Projects;
