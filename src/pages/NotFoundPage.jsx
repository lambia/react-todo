import { Link } from "react-router";

function NotFoundPage() {

	return (
		<>
			<p>404 - Not Found</p>
			<Link to="/">Torna alla home</Link>
		</>
	)

}

export default NotFoundPage;