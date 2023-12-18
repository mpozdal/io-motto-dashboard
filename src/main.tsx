/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext.tsx';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { AuthProvider } from './contexts/AuthContext.tsx';
Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<AdminProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AdminProvider>
		</AuthProvider>
	</React.StrictMode>
);
