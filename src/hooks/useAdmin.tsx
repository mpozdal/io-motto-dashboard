import { AdminContext } from '../contexts/AdminContext';
import { useContext } from 'react';

const useAdmin = () => {
	return useContext(AdminContext);
};

export default useAdmin;
