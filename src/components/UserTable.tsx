import { useEffect, useState } from 'react';
import ModalEdit from './ModalEdit';
import { Button } from 'react-bootstrap';
const UserTable = ({ user, index }) => {
	const [modalOpen, setModalOpen] = useState(false);
	function closeModal() {
		setModalOpen(false);
	}
	return (
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{user?.id}</td>
			<td>{user?.email}</td>
			<td>{user?.defaultStore?.address}</td>
			<td>{user?.role?.name}</td>
			<td>
				<Button onClick={() => setModalOpen(true)}>Edit</Button>
				<Button>Info</Button>
			</td>
			{modalOpen && (
				<ModalEdit
					setOpenModal={setModalOpen}
					modalOpen={modalOpen}
					closeModal={closeModal}
					user={user}
					type="UserUpdate"
				/>
			)}
		</tr>
	);
};

export default UserTable;
