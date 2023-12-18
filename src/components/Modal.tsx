import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Modal.css';
import CreateDrink from '../ui-components/CreateDrink';

function Modal2({ setOpenModal, modalOpen, closeModal }) {
	return (
		<>
			<div
				className="modal show"
				style={{ display: 'block', position: 'initial' }}
			>
				<Modal show={modalOpen} onHide={closeModal}>
					<Modal.Header closeButton>
						<Modal.Title>Add new drink</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<CreateDrink />
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

export default Modal2;
