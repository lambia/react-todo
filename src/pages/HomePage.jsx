import { NavLink } from "react-router";

function HomePage() {

	return (
		<div>
			<header>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/todo">ToDo</NavLink>
			</header>
			<h1>Homepage</h1>
			<p>Lorem ipsum ecc..</p>
		</div>
	)

}

export default HomePage;