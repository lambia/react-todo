import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

import DefaultLayout from "./layouts/DefaultLayout";
import FullpageLayout from "./layouts/FullpageLayout";

function App() {

	return (
		<BrowserRouter>
			<Routes>

				<Route Component={DefaultLayout}>
					<Route path="/" Component={HomePage} />
					<Route path="/about" Component={AboutPage} />
					<Route path="/todo" Component={TodoListPage} />
					<Route path="/todo/:id" Component={TodoDetailPage} />
				</Route>

				<Route Component={FullpageLayout}>
					<Route path="*" Component={NotFoundPage} />
				</Route>

			</Routes>
		</BrowserRouter>
	)
}

export default App
