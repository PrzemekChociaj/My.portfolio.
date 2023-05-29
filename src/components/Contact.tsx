import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {

	const {t, i18n } =useTranslation()
	return (
		<>
		<div
			id='contact'
			className='w-full h-screen bg-[#252A34] flex justify-center items-center p-4'>
				<div className='flex flex-row justify-between'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.4 }}>
				<form
					method='POST'
					action='https://getform.io/f/17994817-31f7-46b8-bfc2-d4f6401160e8'
					className='flex flex-col w-full'>
					<div className='pb-9'>
						
						<p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] text-gray-300'>
							
							{t("Contact.1")} 
							
						</p>
						
						<p className='text-gray-300 py-4'>
							{t("Form.1")}
					
							
						</p>
					</div>
					<input
						className='bg-[#ccd6f6] p-2'
						type='text'
						placeholder='Name'
						name='name'

					/>
					<input
						className='my-4 p-2 bg-[#ccd6f6]'
						type='email'
						placeholder='Email'
						name='email'
					/>
					<textarea
						className='bg-[#ccd6f6] p-2'
						name='message'
						rows='10'
						placeholder='Message'></textarea>
					<button className='text-white border-2 hover:bg-[#FF2E63] hover:text-[#ffffff] hover:border-[#ffffff] px-4 py-3 my-8 mx-auto flex items-center'>
						{t("Submit.1")}
					</button>
				</form>
		
			</motion.div>
			
			</div>
		</div>
		</>
	);
};

export default Contact;
