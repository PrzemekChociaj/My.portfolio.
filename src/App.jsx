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
import Projects from './components/Projects';
import HomeSite from './components/HomeSite';
import AnimCursor from './components/AnimCursor';
import ProjectsComponent from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {



	return (
<ParallaxProvider>
		<Routes>


		
		
		<Route path='/' element={<HomeSite />}></Route>
		<Route path='/projects' element={<ProjectsComponent />}></Route>
			
			
			
	
		</Routes>
		</ParallaxProvider>
	);
}

export default App;
