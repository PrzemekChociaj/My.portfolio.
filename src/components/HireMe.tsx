import React from 'react';
import Circular from '../assets/circular.png';
import { Link } from 'react-router-dom';
import ReactCurvedText from 'react-curved-text';
const HireMe = () => {
	return (
		<div className='  hidden lg:flex fixed left-4 bottom-4 items-center justify-center overflow-hidden'>
			<div className='w-48 h-auto flex items-center justify-center relative'>
            <ReactCurvedText
            width={300}
            height={300}
            cx={98}
            cy={150}
            rx={65}
            ry={65}
            startOffset={30}
            reversed={false}
            text="React Javascript developer"
            textProps={{ style: { fontSize: 22}}}
            textPathProps={{"fill": "#ffffff"}}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null} 
        />
        
				<a href='mailto:przemyslawchociaj@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-white shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-[#FF2E63] hover:text-[#ffffff] hover:border-[#ffffff]'>
					Hire me!
				</a>
			</div>
		</div>
	);
};

export default HireMe;
