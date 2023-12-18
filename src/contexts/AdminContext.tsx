/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listUsers, getUser } from '../graphql/queries.js';
import { createUser } from '../graphql/mutations.js';
import { getCurrentUser } from 'aws-amplify/auth';

const AdminContext = createContext();
const client = generateClient();

const AdminProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	return (
		<AdminContext.Provider
			value={{
				users,
				setUsers,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};

export { AdminContext, AdminProvider };
