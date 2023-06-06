import React from 'react';

const Project = ({ img, title, url }) => {
	return (
		<div className='relative flex flex-col items-center justify-center h-auto w-full border shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-bg-cyan-500 to-[#000000]'>
			<img src={img} className='rounded-xl group-hover:opacity-10' />
			<div className='hidden group-hover:block absolute '>
				<h3 className='sm:text-xl lg:text-2xl flex font-bold px-10 text-white tracking-wider text-center'>
					{title}
				</h3>

				<a href={url}>
					<p className='text-center p-3 rounded-ld bg-white items-center text-gray-700 font-bold cursor-pointer text-lg rounded-full'>
						More info
					</p>
				</a>
			</div>
		</div>
	);
};

export default Project;
