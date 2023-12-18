import { useAuthenticator } from '@aws-amplify/ui-react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
const Dashboard = () => {
	const { user } = useAuthenticator((context) => [context.user]);
	const { currentUser, role } = useAuth();

	if (!currentUser && role !== 'admin') {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<h1>Dashboard</h1>
		</>
	);
};

export default Dashboard;
