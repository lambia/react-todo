import { useState } from "react";

function App() {

	function addTodo() {
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
	}

	function updateTitolo(event) {
		setTitolo(event.target.value);
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

	const [todoList, setTodoList] = useState([]);

	const [titolo, setTitolo] = useState('titolone');
	const [descrizione, setDescrizione] = useState('lunga descrizione');
	const [isImportante, setIsImportante] = useState(true);
	const [categoria, setCategoria] = useState('lavoro');

	return (
		<>

			{/* Visualizzo lista */}
			<div id="todo-list">
				<h2>ToDo List</h2>
				<ul>
					{todoList.map((todoItem, i) =>
						<li key={i}>{todoItem.titolo} - {todoItem.categoria}</li>
					)}
				</ul>
			</div>

			{/* Inserimento nuovo item */}
			<div id="todo-insert">

				{/* Form inserimento */}
				<div id="todo-insert-form">
					<input value={titolo} onChange={updateTitolo} type="text" placeholder="nuovo todo" />

					<textarea value={descrizione} onChange={updateDescrizione} />

					<input type="checkbox" checked={isImportante} onChange={updateIsImportante} />

					<select value={categoria} onChange={updateCategoria}>
						<option value="casa">Casa</option>
						<option value="lavoro">Lavoro</option>
						<option value="altro">Altro</option>
					</select>


					<button onClick={addTodo}>Aggiungi elemento</button>
				</div>

				{/* Pannello preview */}
				<div id="todo-insert-preview">
					<div>Stai per inserire:
						<ul>
							<li>Titolo: {titolo}</li>
							<li>Descrizione: {descrizione}</li>
							<li>Is Importante: {isImportante ? "si" : "no"}</li>
							<li>Categoria: {categoria}</li>
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}

export default App
