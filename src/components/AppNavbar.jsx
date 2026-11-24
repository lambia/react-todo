import { NavLink } from "react-router";

function AppNavbar() {

	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/todo">ToDo</NavLink>
		</nav>
	);

}

export default AppNavbar;