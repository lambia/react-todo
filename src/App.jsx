import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={HomePage} />
				<Route path="/about" Component={AboutPage} />
				<Route path="/todo" Component={TodoPage} />
				<Route path="*" Component={NotFoundPage} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
