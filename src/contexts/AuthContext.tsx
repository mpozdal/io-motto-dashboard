/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, createContext, useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getUser } from '../graphql/queries.js';
import { createUser } from '../graphql/mutations.js';
import { getCurrentUser } from 'aws-amplify/auth';
const AuthContext = createContext();
const client = generateClient();

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [role, setRole] = useState('customer');
	const [shop, setShop] = useState('');

	return (
		<AuthContext.Provider
			value={{
				role,
				setRole,
				currentUser,
				setCurrentUser,
				setShop,
				shop,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
