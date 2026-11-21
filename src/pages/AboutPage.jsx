import { NavLink } from "react-router";

function About() {

	return (
		<div>
			<header>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/todo">ToDo</NavLink>
			</header>
			<h1>About</h1>
			<p>Chi siamo ecc...</p>
		</div>
	)

}

export default About;