import AppNavbar from "@/components/AppNavbar";
import { Link } from "react-router";

function NotFoundPage() {

	return (
		<>
			<AppNavbar />
			<main>
				<p>404 - Not Found</p>
				<Link to="/">Torna alla home</Link>
			</main>
		</>
	)

}

export default NotFoundPage;