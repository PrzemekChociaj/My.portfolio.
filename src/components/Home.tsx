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
const Home = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/Projects');
	};

	const [text] = useTypewriter({
		words: ['Junior React Developer', 'Junior JavaScript Developer'],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});

	const { t, i18n } = useTranslation();
	return (
		<div id='home' className='  h-screen bg-[#252A34] text-gray-300'>
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<motion.div
					initial={{ opacity: 0, x: -500 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 1 }}>
					<motion.p
						initial={{ opacity: 0, x: -500 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 1 }}
						className=' text-[#FF2E63] text-3xl  font-bold tracking-wide'>
						{t('Greeting.1')}
					</motion.p>
					<h1 className=' max-w-[1000px] text-4xl mb-2 sm:text-6xl font-bold text-[#ffffff] tracking-wide'>
						{t('Name.1')}
					</h1>
					<h2 className='text-4xl sm:text-4xl font-bold-400 text-[#ffffff] tracking-wide'>
						Aspirant {text}
						<Cursor
							cursorBlinking='false'
							cursorStyle='| '
							cursorColor='#FF2E63'
						/>
					</h2>
					<motion.p
						initial={{ opacity: 0, x: -1000 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 1 }}
						className='text-[#ffffff] py-4 max-w tracking-wide opacity-80'>
						{t('Specialization.1')}
					</motion.p>
					<div>
						<button
							onClick={handleClick}
							className=' text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF2E63] hover:text-[#ffffff] hover:border-[#ffffff]'>
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
