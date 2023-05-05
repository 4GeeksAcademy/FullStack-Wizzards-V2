import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark text-light mb-3">
			<Link to="/" className="mx-2">
				<span className="navbar-brand mb-0 h1 text-light">Router Practice 🧙</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary mx-2">Sign In</button>
				</Link>
			</div>
		</nav>
	);
};
