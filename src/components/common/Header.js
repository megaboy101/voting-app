import React from 'react';
import { Link } from 'react-router';

const Header = () =>
	<header>
		<div className="container-main">
			<h1>
				Opinionated
				<span>Have an opinion</span>
			</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/account">Account</Link>
				<Link to="/login">Login</Link>
			</nav>
		</div>
	</header>;

export default Header;
