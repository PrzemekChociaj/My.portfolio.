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



const HomeSite = () => {
	return (
		<>
		
        	<AnimCursor />
			<HireMe />
			<Navbar  />
			<Home  />
			<About />
			<Skills />
			<TestimonialSlider />
			<Work />
			<Contact />
			
		
		</>
	);
};

export default HomeSite;
