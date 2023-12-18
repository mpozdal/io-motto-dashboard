import useMotto from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
	const { user } = useMotto();
	if (!user) {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default ProtectedRoute;
