/* eslint-disable react-refresh/only-export-components */
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Store from './pages/Store';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import { Hub } from 'aws-amplify/utils';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Settings from './pages/Settings';
import useAuth from './hooks/useAuth.js';
import { useEffect } from 'react';
import { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import useAdmin from './hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { getUser } from './graphql/queries';

import { createUser } from './graphql/mutations.js';
import Menu from './pages/Menu.js';

function App({ user }: WithAuthenticatorProps) {
	//const { users, setUsers, fetchUsers } = useAdmin();
	const client = generateClient();
	const navigate = useNavigate();
	const { setCurrentUser, currentUser, setRole, role, setShop, shop } =
		useAuth();
	setCurrentUser(user);

	Hub.listen('auth', ({ payload }) => {
		switch (payload.event) {
			case 'signedIn':
				handleSignIn();
				navigate('/');
				break;
		}
	});
	const createUser = async (id, email, name, roleID) => {
		await client.graphql({
			query: createUser,
			variables: {
				input: {
					id: id,
					email: email,
					name: name,
					userRoleId: roleID,
				},
			},
		});
	};
	const handleSignIn = async () => {
		try {
			if (currentUser !== null) {
				const response = await client.graphql({
					query: getUser,
					variables: {
						id: currentUser.userId,
					},
				});

				setRole(response?.data?.getUser?.role?.name);
				if (response.data.getUser.role.name === 'owner') {
					setShop({
						id: response.data.getUser.defaultStore.id,
						shop: response.data.getUser.defaultStore.address,
					});
				}
				if (response?.data?.getUser === null) {
					createUser(
						userData?.userId,
						userData?.signInDetails?.loginId,
						'username',
						'99347c14-839f-4fc9-976e-6f8dad2c7a3d'
					);
				}
			}
		} catch (e) {
			console.warn(e);
		}
	};

	useEffect(() => {
		handleSignIn();
	});

	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/users" element={<Users />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/store" element={<Store />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default withAuthenticator(App);
