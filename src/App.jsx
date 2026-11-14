// import Componente from "@/components/Componente"

import { useState } from "react";

function App() {

	function addTodo() {
		// const nuovoValore = [...todoList];
		// nuovoValore.push("Nuovo elemento");

		const nuovoValore = [
			...todoList,
			userInput
		];

		setTodoList(nuovoValore);

		setUserInput("");
	}

	function updateUserText(event) {
		// const inputEl = event.target; //il soggetto dell'evento = <input>
		// const valoreInput = inputEl.value; //il valore dell'input

		// console.log("qualcosa è cambiato", valoreInput);

		// setUserInput(valoreInput);

		setUserInput(event.target.value); //<-- versione in unica riga
	}

	// const todoListInitial = [
	// 	"realizzare scaffold",
	// 	"popolare componenti",
	// 	"testare applicazione"
	// ];
	// const [todoList, setTodoList] = useState(todoListInitial);

	const [todoList, setTodoList] = useState([]);

	const [userInput, setUserInput] = useState("");

	return (
		<>

			<h2>ToDo List</h2>

			<ul>
				{todoList.map((todoItem, i) => <li key={i}>{todoItem}</li>)}
			</ul>

			<input onChange={updateUserText} type="text" placeholder="nuovo todo" />
			<button onClick={addTodo}>Aggiungi elemento</button>

			<p>Stai per inserire: {userInput}</p>


			{/* <Componente /> */}
		</>
	)
}

export default App
