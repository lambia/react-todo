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

		setTitolo("");
		setDescrizione("");
		setIsImportante(false);
		setCategoria("");
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

	const [titolo, setTitolo] = useState('');
	const [descrizione, setDescrizione] = useState('');
	const [isImportante, setIsImportante] = useState(false);
	const [categoria, setCategoria] = useState('');

	return (
		<>

			{/* Visualizzo lista */}
			<div id="todo-list">
				<h2>ToDo List</h2>

				{todoList.length
					? <ul>{todoList.map((todoItem, i) => <li key={i}>{todoItem.titolo} - {todoItem.categoria}</li>)}</ul>
					: <p>La lista al momento è vuota</p>
				}
			</div>

			{/* Inserimento nuovo item */}
			<div id="todo-insert">

				{/* Form inserimento */}
				<div id="todo-insert-form">
					<label className="vertical">
						<span>Titolo</span>
						<input value={titolo} onChange={updateTitolo} type="text" placeholder="Titolo ToDo" />
					</label>

					<label className="vertical">
						<span>Descrizione</span>
						<textarea value={descrizione} onChange={updateDescrizione} placeholder="Descrizione ToDo" />
					</label>

					<label className="vertical">
						<span>Categoria</span>
						<select value={categoria} onChange={updateCategoria}>
							<option value="" disabled>Seleziona una categoria</option>
							<option value="casa">Casa</option>
							<option value="lavoro">Lavoro</option>
							<option value="altro">Altro</option>
						</select>
					</label>

					<label className="horizontal">
						<input type="checkbox" checked={isImportante} onChange={updateIsImportante} />
						<span>Importante</span>
					</label>

					<button onClick={addTodo}>Aggiungi elemento</button>
				</div>

				{/* Pannello preview */}
				<div id="todo-insert-preview">
					<div>Stai per inserire:
						<ul>
							<li>Titolo: {titolo || "vuoto"}</li>
							<li>Descrizione: {descrizione || "vuota"}</li>
							<li>Categoria: {categoria || "nessuna"}</li>
							<li>Importante: {isImportante ? "si" : "no"}</li>
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}

export default App
