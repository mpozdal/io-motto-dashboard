import { useAuthenticator } from '@aws-amplify/ui-react';
import Logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { Button } from 'react-bootstrap';
const Nav = () => {
	const { signOut } = useAuthenticator((context) => [context.user]);
	const { role, currentUser } = useAuth();
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<img src={Logo} alt="Bootstrap" width="100" height="100" />

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse "
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav d-flex align-items-center gap-3">
						<NavLink
							className="nav-link active"
							aria-current="page"
							to="/"
						>
							Home
						</NavLink>
						{role === 'owner' ? (
							<NavLink
								className="nav-link active"
								aria-current="page"
								to="/store"
							>
								My store
							</NavLink>
						) : (
							<></>
						)}

						{role === 'admin' ? (
							<>
								<NavLink
									className="nav-link active"
									aria-current="page"
									to="/dashboard"
								>
									Dashboard
								</NavLink>
								<NavLink
									className="nav-link active"
									aria-current="page"
									to="/users"
								>
									Users
								</NavLink>
								<NavLink
									className="nav-link active"
									aria-current="page"
									to="/menu"
								>
									Menu
								</NavLink>
							</>
						) : (
							<></>
						)}
						<Button
							variant="danger"
							onClick={() => {
								signOut();
								navigate('/');
							}}
						>
							Sign out
						</Button>
						<div>
							Logged as:{' '}
							<b>
								{currentUser?.signInDetails?.loginId} [{role}]
							</b>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
