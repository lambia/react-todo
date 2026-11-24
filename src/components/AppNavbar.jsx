import { NavLink } from "react-router";

function AppNavbar() {

	return (
		<header>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/todo">ToDo</NavLink>
			</nav>
		</header>
	);

}

export default AppNavbar;