import React, { useState } from 'react';
import { FaBars, FaBeer, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {ImHome3} from 'react-icons/im'
import England from '../assets/England.png';
import Poland from '../assets/Poland.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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

const ProjectsNavbar = () => {
	const [navbar, setNavbar] = useState(false);
	const navigate = useNavigate();

	const HomeNav = () => {
		navigate('/');
	};

	const { t, i18n } = useTranslation();

	const handleClick = () => {
		setNavbar(!navbar);
	};

	const handleClickLang = (lang) => {
		i18n.changeLanguage(lang);
	};
	return (
		<div className=' w-full h-[100px] flex justify-center bg-[#252A34]  items-center px-4 text-gray-100 z-50'>
			<div className=' font-extrabold text-xl absolute left-0 ml-5   text-[#FF2E63]'>
				Przemysław Chociaj
			</div>

			<div className=' text-[#ffffff]   p-3 font-bold  inline   '>
				<ul className='hidden md:flex '>
					<li className='hover:text-[#FF2E63] duration-300 '>
						<Link onClick={HomeNav} to='home' smooth={true} duration={500}>
							{t('Home.1')}
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
			<div onClick={HomeNav} className='md:hidden z-10'>
				{!navbar ? (
					<ImHome3 className='cursor-pointer' />
				) : null
				}
			</div>

			<div>
			

				<div className='hidden lg:flex fixed flex-col top[35%] left-0 mt-[150px]'>
					
				</div>
			</div>
		</div>
	);
};

export default ProjectsNavbar;
