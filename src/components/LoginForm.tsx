import { useState } from 'react';
import useMotto from '../hooks/useAuth';

const LoginhtmlForm = () => {
	const [];

	return (
		<>
			<section className="d-flex flex-column w-40 mt-5">
				<input
					className="p-2 border-0 border-bottom border-2 bg-transparent"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					className="p-2 border-0 border-bottom border-2 bg-transparent"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button className="p-2 mt-5" onClick={() => handleLogin()}>
					Sign in
				</button>
			</section>
		</>
	);
};

export default LoginhtmlForm;
