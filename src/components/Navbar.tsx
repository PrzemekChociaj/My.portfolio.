import React, { useState } from 'react';
import { FaBars, FaBeer, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import England from '../assets/England.png';
import Poland from '../assets/Poland.png';
import { motion, AnimatePresence } from 'framer-motion';
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

const item = {
	exit: {
		opacity: 0,
		height: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.3,
			delay: 0.9,
		},
	},
};

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const { t, i18n } = useTranslation();

	const handleClick = () => {
		setNavbar(!navbar);
	};

	const handleClickLang = (lang) => {
		i18n.changeLanguage(lang);
	};
	return (
		<div className='fixed w-full h-[100px] flex justify-center bg-[#252A34] bg-opacity-75  items-center px-4 text-gray-100 z-50'>
			<div className=' font-extrabold text-xs sm:text-xl absolute left-0 ml-5   text-[#FF2E63]'>
				Przemysław Chociaj
			</div>

			<div className=' text-[#ffffff]   p-3 font-bold '>
				<ul className='hidden md:flex '>
					<li className='hover:text-[#FF2E63] duration-300 '>
						<Link to='home' smooth={true} duration={500}>
							{t('Home.1')}
						</Link>
					</li>
					<li className='hover:text-[#FF2E63] duration-300'>
						<Link to='about' smooth={true} duration={500}>
							{t('About.1')}
						</Link>
					</li>
					<li className='hover:text-[#FF2E63] duration-300'>
						<Link to='skills' smooth={true} duration={500}>
							{t('Skills.1')}
						</Link>
					</li>
					<li className='hover:text-[#FF2E63] duration-300'>
						<Link to='testimonials' smooth={true} duration={500}>
							{t('Testimonials.1')}
						</Link>
					</li>
					<li className='hover:text-[#FF2E63] duration-300'>
						<Link to='work' smooth={true} duration={500}>
							{t('Projects.1')}
						</Link>
					</li>
					<li className='hover:text-[#FF2E63] duration-300'>
						<Link to='contact' smooth={true} duration={500}>
							{t('Contact.1')}
						</Link>
					</li>
				</ul>
			</div>
			<div className='absolute right-0 mr-11'>
				<button onClick={() => handleClickLang('pl')}>
					{' '}
					<img className='w-10 mx-auto mr-3' src={Poland} alt='Poland' />
				</button>
				<button onClick={() => handleClickLang('en')}>
					{' '}
					<img className='w-10 mx-auto' src={England} alt='England' />
				</button>
			</div>
			<div onClick={handleClick} className='md:hidden z-10'>
				{!navbar ? (
					<FaBars className='cursor-pointer' />
				) : (
					<FaTimes className='cursor-pointer' />
				)}
			</div>

			<div>
				<ul
					className={
						!navbar
							? 'hidden'
							: 'absolute top-0 left-0 w-full h-screen bg-[#252A34] flex flex-col justify-center items-center'
					}>
					<li className='py-6 text-4xl hover:text-[#FF2E63] duration-300'>
						<Link onClick={handleClick} to='home' smooth={true} duration={500}>
							{t('Home.1')}
						</Link>
					</li>
					<li className='py-6 text-4xl hover:text-[#FF2E63] duration-300'>
						<Link onClick={handleClick} to='about' smooth={true} duration={500}>
							{t('About.1')}
						</Link>
					</li>
					<li className='py-6 text-4xl hover:text-[#FF2E63] duration-300'>
						<Link
							onClick={handleClick}
							to='skills'
							smooth={true}
							duration={500}>
							{t('Skills.1')}
						</Link>
					</li>
					<li className='py-6 text-4xl hover:text-[#FF2E63] duration-300'>
						<Link onClick={handleClick} to='work' smooth={true} duration={500}>
							{t('Projects.1')}
						</Link>
					</li>
					<li className='py-6 text-4xl hover:text-[#FF2E63] duration-300'>
						<Link
							onClick={handleClick}
							to='testimonials'
							smooth={true}
							duration={500}>
							{t('Testimonials.1')}
						</Link>
					</li>
					<li className='py-6 text-4xl hover:text-[#FF2E63] duration-300'>
						{' '}
						<Link
							onClick={handleClick}
							to='contact'
							smooth={true}
							duration={500}>
							{t('Contact.1')}
						</Link>
					</li>
				</ul>

				<div className='hidden lg:flex fixed flex-col top[35%] left-0 mt-[150px]'>
					<ul>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='https://www.linkedin.com/in/przemys%C5%82aw-chociaj/'>
								Linkedin <FaLinkedin size={30} />
							</a>
						</li>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='https://github.com/PrzemekChociaj'>
								Github <FaGithub size={30} />
							</a>
						</li>
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-600'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='mailto:przemyslawchociaj@gmail.com"'>
								Email <HiOutlineMail size={30} />
							</a>
						</li>{' '}
						<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-700'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='/'>
								CV <BsFillPersonLinesFill size={30} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
