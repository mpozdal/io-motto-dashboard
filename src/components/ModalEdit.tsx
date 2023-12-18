import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UpdateDrink } from '../ui-components';
import './Modal.css';
import CreateDrink from '../ui-components/CreateDrink';
import UpdateUser from '../ui-components/UpdateUser';

function ModalEdit({ setOpenModal, modalOpen, closeModal, drink, type, user }) {
	console.log(drink);
	console.log(user);
	return (
		<>
			<div
				className="modal show"
				style={{ display: 'block', position: 'initial' }}
			>
				<Modal show={modalOpen} onHide={closeModal}>
					<Modal.Header closeButton>
						<Modal.Title>Edit</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						{type === 'DrinkUpdate' && (
							<UpdateDrink drink={drink} />
						)}
						{type === 'UserUpdate' && <UpdateUser user={user} />}
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={closeModal}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
}

export default ModalEdit;
