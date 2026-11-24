import { Outlet } from "react-router";

function FullpageLayout() {

	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	)

}

export default FullpageLayout;