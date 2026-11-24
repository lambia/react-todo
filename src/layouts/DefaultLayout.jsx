import AppFooter from "@/components/AppFooter";
import AppNavbar from "@/components/AppNavbar";
import { Outlet } from "react-router";

function DefaultLayout() {

	return (
		<>
			<header>
				<AppNavbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<AppFooter />
			</footer>
		</>
	)

}

export default DefaultLayout;