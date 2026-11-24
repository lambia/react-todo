import ToDoList from "@/components/ToDoList";
import AppNavbar from "@/components/AppNavbar";

function TodoListPage() {

	return (
		<>
			<AppNavbar />
			<main>
				<ToDoList />
			</main>
		</>
	)

}

export default TodoListPage;