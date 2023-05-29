import React, { useState } from 'react';
import { Arrays} from '../assets/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper'; 
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';




const TestimonialSlider = () => {
	
	const [activeIndex, setActiveIndex] = useState(0);
	const { t, i18n } = useTranslation();

		
		return (
		  <section>
			<div name='testimonials' className="h-screen bg-[#252A34] flex items-center flex-col text-center   px-5 pt-14">
			  <h2 className="text-white font-bold mt-10 text-center text-3xl border-b-2 inline border-[#FF2E63]"> {t("Testimonial.1")}
			  </h2>
			  <br />
			  <Swiper  style={{
  "--swiper-pagination-color": "#FF2E63",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "0.5",
  "--swiper-pagination-bullet-size": "15px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}
				direction={"vertical"}
				pagination={{
				  clickable: true,
				}}
				data-aos="fade-up"
				loop={true}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={(e) => {
				  console.log(e.realIndex);
				  setActiveIndex(e.realIndex);
				}}
				modules={[Pagination]}
				className="md:h-96 h-[40rem]  max-w-3xl mt-24"
			  >
				{Arrays.map((Arrays, i) => (
				  <SwiperSlide key={i}>
					<div
					  className={` duration-400 bg-[#393E48] mx-8 
					p-8 h-full rounded-3xl flex items-center gap-6
					  md:flex-row flex-col text-white italic
					  ${activeIndex !== i && "scale-76 blur-sm"}`}
					>
					  <img src={Arrays.authorIMG} alt="..." className="h-24  rounded-full" />
					  <div>
						<p className="sm:text-base text-sm">{Arrays.authorText}</p>
						<br />
						<h6>{Arrays.authorName}</h6>
					  </div>
					</div>
				  </SwiperSlide>
				))}
			  </Swiper>
			</div>
		  </section>
		);
	  };

export default TestimonialSlider;
