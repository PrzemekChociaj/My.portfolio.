import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import { BrowserRouter } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense
				fallback={
					<div className='w-full flex items-center justify-center  h-screen bg-[#252A34]'>
						<SyncLoader color='#ffffff' />{' '}
					</div>
				}>
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);
