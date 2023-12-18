import useAuth from '../hooks/useAdmin';
import { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import Modal from '../components/Modal';
import useAdmin from '../hooks/useAdmin';
import { Button } from 'react-bootstrap';
import { listDrinks2, listCategories2 } from '../graphql/queries';
import { deleteDrink } from '../graphql/mutations';
import { onCreateDrink } from '../graphql/subscriptions';
import CoffeesList from '../components/CoffeesList';
const client = generateClient();

const Menu = () => {
	const { currentUser, role } = useAuth();
	const [modalOpen, setModalOpen] = useState(false);

	const [menu, setMenu] = useState([]);

	if (!currentUser && role === 'admin') {
		return <Navigate to="/" replace />;
	}
	function closeModal() {
		setModalOpen(false);
	}
	useEffect(() => {
		//fetchMenu();
		fetchCategories();
	}, []);
	const fetchCategories = async () => {
		const response = await client.graphql({
			query: listCategories2,
		});
		console.log(response.data);
		setMenu(response.data.listCategories.items);
	};
	const fetchMenu = async () => {
		const response = await client.graphql({
			query: listDrinks2,
		});

		setMenu(response.data.listDrinks.items);
	};

	const deleteItem = (drinkID) => {
		try {
			client.graphql({
				query: deleteDrink,
				variables: {
					input: {
						id: drinkID,
					},
				},
			});
		} catch (e) {
			console.warn(e);
		} finally {
			alert('removed');
		}
	};

	return (
		<>
			<main className="">
				<section className="d-flex justify-content-center">
					<Button
						variant="primary"
						className="openModalBtn"
						onClick={() => {
							setModalOpen(!modalOpen);
						}}
					>
						Add new item
					</Button>
				</section>
				<section className="mt-5 container mt-4">
					<div className="row">
						{menu.map((category, index) => (
							<>
								<h2>{category?.name}</h2>
								{category?.drinks?.items?.map((drink) => (
									<CoffeesList drink={drink} index={index} />
								))}
							</>
						))}
					</div>
				</section>
			</main>
			{modalOpen && (
				<Modal
					setOpenModal={setModalOpen}
					modalOpen={modalOpen}
					closeModal={closeModal}
				/>
			)}
		</>
	);
};

export default Menu;
