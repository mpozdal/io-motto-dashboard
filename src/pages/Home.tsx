import { useAuthenticator } from '@aws-amplify/ui-react';
import { CreateStore, CreateDrink } from '../ui-components/';

const Home = () => {
	const { user } = useAuthenticator((context) => [context.user]);

	return (
		<main className="w-100">
			<h1>Home</h1>
			<section className="d-xl-flex justify-content-center flex-wrap">
				<section></section>
			</section>
		</main>
	);
};

export default Home;
