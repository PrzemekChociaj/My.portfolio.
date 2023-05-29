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


const Work = () => {
	const { t, i18n } = useTranslation();
	return (
	
		<section id='work' className='bg-[#252A34] w-full bg-cover'>
			<div className='px-14 pt-24  min-h-screen flex flex-col justify-between text-center'>
				<div>
					<h2
						className='text-4xl text-white font-bold inline border-b-4 border-[#FF2E63]'
						data-aos='fade-down'>
						Projects
					</h2>
					<h4 className='mt-5 text-2xl text-white' data-aos='fade-down'>
						{t("Check.1")}
					</h4>
					<br />
				</div>
				<div className='flex items-center lg:flex-row mb-10  flex-col-reverse gap-5'>
					<motion.img
						initial={{ opacity: 0, x: -500 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						src={Harold}
						className='max-w-[55vw] min-w-[55rem] relative bottom-24 flex items-center'
					/>

					<Swiper
						pagination={{
							clickable: true,
						}}
						data-aos='fade-left'
						spaceBetween={20}
						modules={[Pagination]}
						className='rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start'>
						{projectContent.map((content, i) => (
							<SwiperSlide
								key={i}
								className='bg-[#EAEAEA] rounded-3xl p-5  h-fit'>
								<img src={content.image} alt='...' />
								<div className='flex flex-col gap-1 mt-2'>
									<h5 className='font-bold font-Poppins'>{content.title}</h5>
									<button className='font-bold text-gray self-end'>
										READ MORE
									</button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	
	);
};

export default Work;
