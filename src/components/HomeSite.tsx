import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import AnimCursor from './AnimCursor';
import TestimonialSlider from './TestimonialSlider';
import HireMe from './HireMe';
import NextSection from './NextSection';



const HomeSite = () => {
	return (
		<>
		
        	<AnimCursor />
			<HireMe />
			<NextSection />
			<Navbar  />
			<Home  />
			<About />
			<Skills />
		
			<Work />
			<TestimonialSlider />
			<Contact />
			
		
		</>
	);
};

export default HomeSite;
