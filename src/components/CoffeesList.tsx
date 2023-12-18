import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalEdit from './ModalEdit';

const CoffeesList = ({ drink, index }) => {
	const [modalOpen, setModalOpen] = useState(false);
	function closeModal() {
		setModalOpen(false);
	}
	return (
		<div key={index} className="col-md-4 mb-4">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{drink.name}</h5>
					<h5 className="card-title">{drink.id}</h5>

					<h5 className="card-title">{drink.price} zł</h5>
					<section>
						<h4>Milks</h4>
						{drink.milks.items.map((milk, index) => (
							<div key={index}>{milk.name}</div>
						))}
					</section>
					<section>
						<h4>Flavor shots</h4>
						{drink.flavorShots.items.map((shot, index) => (
							<div key={index}>{shot.name}</div>
						))}
					</section>
					<section>
						<h4>Sizes</h4>

						{drink.sizes.items.map((size, index) => (
							<div key={index}>{size.value}</div>
						))}
					</section>
					<section className="d-flex justify-content-around">
						<Button onClick={() => setModalOpen(true)}>Edit</Button>
						<Button onClick={() => deleteItem(drink.id)}>
							Remove
						</Button>
					</section>
				</div>
			</div>
			{modalOpen && (
				<ModalEdit
					setOpenModal={setModalOpen}
					modalOpen={modalOpen}
					closeModal={closeModal}
					drink={drink}
					type="DrinkUpdate"
				/>
			)}
		</div>
	);
};

export default CoffeesList;
