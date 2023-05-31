import './index.css';
import { motion, useMotionTemplate } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { useEffect, useMemo, useState } from 'react';
import Work from './components/Work';
import { Route, Routes } from 'react-router-dom';
import HomeSite from './components/HomeSite';
import AnimCursor from './components/AnimCursor';
import Projects from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Pomodoro, Portfolio } from './assets/data';
import { MusicShop } from './assets/data';
import { pomodoroDesc } from './assets/data';
import { musicShopDesc } from './assets/data';
import { portfolioDesc } from './assets/data';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomeSite />}></Route>
			<Route
				path='/Pomodoro'
				element={
					<Projects array={Pomodoro} title='Pomodoro' desc={pomodoroDesc} />
				}></Route>
			<Route
				path='/MusicShop'
				element={
					<Projects array={MusicShop} title='Music Shop' desc={musicShopDesc} />
				}></Route>
			<Route
				path='/Portfolio'
				element={
					<Projects array={Portfolio} title='Portfolio' desc={portfolioDesc} />
				}></Route>
		</Routes>
	);
}

export default App;
