import { NavLink } from "react-router";
import ToDoList from "@/components/ToDoList";

function TodoList() {

	return (
		<div>
			<header>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/todo">ToDo</NavLink>
			</header>

			<ToDoList />

		</div>
	)

}

export default TodoList;