// import Componente from "@/components/Componente"

import { useState } from "react";

// const todoList = [
// 	"realizzare scaffold",
// 	"popolare componenti",
// 	"testare applicazione"
// ];

function App() {

	function addTodo() {
		// const nuovoValore = [...todoList];
		// nuovoValore.push("Nuovo elemento");

		const nuovoValore = [
			...todoList,
			"Nuovo Elemento"
		];

		setTodoList(nuovoValore);
	}

	const [todoList, setTodoList] = useState(["uno", "due", "tre"]);

	return (
		<>

			<h2>ToDo List</h2>

			<ul>
				{todoList.map((todoItem, i) => <li key={i}>{todoItem}</li>)}
			</ul>

			<input type="text" placeholder="nuovo todo" />
			<button onClick={addTodo}>Aggiungi elemento</button>


			{/* <Componente /> */}
		</>
	)
}

export default App
