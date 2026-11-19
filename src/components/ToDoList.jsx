import { useState } from "react";

function ToDoList() {

	//Preparo lo state con un array vuoto (la lista dei todo)
	const [todoList, setTodoList] = useState([]);

	//Preparo lo state con un oggetto dove inserire la nuova todo
	const [formData, setFormData] = useState({
		titolo: "",
		descrizione: "",
		isImportante: false,
		categoria: ""
	});

	//Metodo per inserire il nuovo oggetto nell'array
	function addTodo() {

		const nuovaLista = [
			...todoList,
			formData
		];

		console.log(formData);

		setTodoList(nuovaLista);

		setFormData({
			titolo: "",
			descrizione: "",
			isImportante: false,
			categoria: ""
		});
	}

	//Metodo per aggiornare gli state collegati ai campi del form
	function handleChange(event) {

		const nomeCampo = event.target.name;
		const nuovoValore = event.target.value;
		const tipoCampo = event.target.type;

		console.log("Campo interessato", nomeCampo);
		console.log("Tipo campo", tipoCampo);
		console.log("Nuovo valore", nuovoValore);

		const oggettoAggiornato = {
			...formData
		};

		if (tipoCampo == "checkbox") {
			oggettoAggiornato[nomeCampo] = event.target.checked;
		} else {
			oggettoAggiornato[nomeCampo] = event.target.value;
		}

		setFormData(oggettoAggiornato);

	}

	return <>
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
					<input name="titolo" value={formData.titolo} onChange={handleChange} type="text" placeholder="Titolo ToDo" />
				</label>

				<label className="vertical">
					<span>Descrizione</span>
					<textarea name="descrizione" value={formData.descrizione} onChange={handleChange} placeholder="Descrizione ToDo" />
				</label>

				<label className="vertical">
					<span>Categoria</span>
					<select name="categoria" value={formData.categoria} onChange={handleChange}>
						<option value="" disabled>Seleziona una categoria</option>
						<option value="casa">Casa</option>
						<option value="lavoro">Lavoro</option>
						<option value="altro">Altro</option>
					</select>
				</label>

				<label className="horizontal">
					<input name="isImportante" type="checkbox" checked={formData.isImportante} onChange={handleChange} />
					<span>Importante</span>
				</label>

				<button onClick={addTodo}>Aggiungi elemento</button>
			</div>

			{/* Pannello preview */}
			<div id="todo-insert-preview">
				<div>Stai per inserire:
					<ul>
						<li>Titolo: {formData.titolo || "vuoto"}</li>
						<li>Descrizione: {formData.descrizione || "vuota"}</li>
						<li>Categoria: {formData.categoria || "nessuna"}</li>
						<li>Importante: {formData.isImportante ? "si" : "no"}</li>
					</ul>
				</div>
			</div>

		</div>
	</>
}

export default ToDoList;