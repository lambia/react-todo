import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

function App() {

	return (
		<BrowserRouter>
			<header>
				<AppNavbar />
			</header>
			<main>
				<Routes>
					<Route path="/" Component={HomePage} />
					<Route path="/about" Component={AboutPage} />
					<Route path="/todo" Component={TodoListPage} />
					<Route path="/todo/:id" Component={TodoDetailPage} />
					<Route path="*" Component={NotFoundPage} />
				</Routes>
			</main>
			<footer>
				<AppFooter />
			</footer>
		</BrowserRouter>
	)
}

export default App
