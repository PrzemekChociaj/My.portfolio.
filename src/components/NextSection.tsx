import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';

import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from 'react-scroll';
const NextSection = () => {
	const scrollToBottom = () => {
		window.scrollTo({
			top: window.pageYOffset + 4600,
			behavior: 'smooth',
		});
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: window.pageYOffset - 4600,
			behavior: 'smooth',
		});
	};

	return (
		<div>
			<div className='sm:hidden bg-white rounded-full  fixed left-4 bottom-4 items-center justify-center'>
				<div>
					<AiOutlineArrowDown onClick={scrollToBottom} />
				</div>
			</div>

			<div className='sm:hidden bg-white rounded-full  fixed right-4 bottom-4 items-center justify-center'>
				<div>
					<AiOutlineArrowUp onClick={scrollToTop} />
				</div>
			</div>
		</div>
	);
};

export default NextSection;
