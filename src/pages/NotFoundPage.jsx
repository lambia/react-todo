import AppNavbar from "@/components/AppNavbar";
import { Link } from "react-router";

function NotFoundPage() {

	return (
		<div>
			<p>404 - Not Found</p>
			<Link to="/">Torna alla home</Link>
		</div>
	)

}

export default NotFoundPage;