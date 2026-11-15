// import Componente from "@/components/Componente"

import { useState } from "react";

function App() {

	function addTodo() {
		// const nuovoValore = [...todoList];
		// nuovoValore.push("Nuovo elemento");

		console.log("Aggiungi nuovo item");

		const nuovoOggettoTodo = {
			titolo: titolo,
			descrizione: descrizione,
			isImportante: isImportante,
			categoria: categoria,
		};

		const nuovaLista = [
			...todoList,
			nuovoOggettoTodo
		];

		setTodoList(nuovaLista);

		// const nuovoValore = [
		// 	...todoList,
		// 	userInput
		// ];

		// setTodoList(nuovoValore);

		// setUserInput("");
	}

	function updateTitolo(event) {
		// const inputEl = event.target; //il soggetto dell'evento = <input>
		// const valoreInput = inputEl.value; //il valore dell'input

		// console.log("qualcosa è cambiato", valoreInput);

		// setUserInput(valoreInput);

		setTitolo(event.target.value); //<-- versione in unica riga
	}

	function updateDescrizione(event) {
		setDescrizione(event.target.value);
	}

	function updateIsImportante(event) {
		setIsImportante(event.target.checked);
	}

	function updateCategoria(event) {
		setCategoria(event.target.value);
	}

	// const todoListInitial = [
	// {
	// 	titolo: "Esempio di Todo",
	// 	descrizione: "Descrizione molto lunga",
	// 	isImportante: true,
	// 	categoria: "lavoro",
	// },
	// {
	// 	titolo: "Altro",
	// 	descrizione: "Descrizione molto lunga",
	// 	isImportante: false,
	// 	categoria: "casa",
	// }
	// ];
	// const [todoList, setTodoList] = useState(todoListInitial);

	const [todoList, setTodoList] = useState([]);

	const [titolo, setTitolo] = useState('titolone');
	const [descrizione, setDescrizione] = useState('lunga descrizione');
	const [isImportante, setIsImportante] = useState(true);
	const [categoria, setCategoria] = useState('lavoro');

	return (
		<>

			{/* Visualizzo lista */}
			<h2>ToDo List</h2>
			<ul>
				{todoList.map((todoItem, i) =>
					<li key={i}>{todoItem.titolo} - {todoItem.categoria}</li>
				)}
			</ul>

			{/* Inserimento nuovo item */}

			<input value={titolo} onChange={updateTitolo} type="text" placeholder="nuovo todo" />

			<textarea value={descrizione} onChange={updateDescrizione} />

			<input type="checkbox" checked={isImportante} onChange={updateIsImportante} />

			<select value={categoria} onChange={updateCategoria}>
				<option value="casa">Casa</option>
				<option value="lavoro">Lavoro</option>
				<option value="altro">Altro</option>
			</select>


			<button onClick={addTodo}>Aggiungi elemento</button>

			<div>Stai per inserire:
				<ul>
					<li>Titolo: {titolo}</li>
					<li>Descrizione: {descrizione}</li>
					<li>Is Importante: {isImportante ? "si" : "no"}</li>
					<li>Categoria: {categoria}</li>
				</ul>
			</div>


			{/* <Componente /> */}
		</>
	)
}

export default App
