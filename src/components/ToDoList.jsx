import { useState, useEffect } from "react";

function ToDoList() {

	const formDefault = {
		titolo: "",
		descrizione: "",
		isImportante: false,
		categoria: ""
	};

	//Preparo lo state con un array vuoto (la lista dei todo)
	const [todoList, setTodoList] = useState([]);

	//Preparo lo state con un oggetto dove inserire la nuova todo
	const [formData, setFormData] = useState(formDefault);

	const [isEditing, setIsEditing] = useState(true);

	//Recupero ToDo all'avvio del componente
	//getTodos //errore! andrebbe in loop!
	useEffect(getTodos, []); //metodo corretto

	//const isDisabled = formData.titolo == "" || formData.categoria == "" || formData.descrizione == "";
	const isDisabled = formData.titolo == "";

	function getTodos() {

		const url = "http://localhost:3000/api/todos"

		fetch(url)
			.then(response => {
				if (!response.ok) { throw new Error("Chiamata non ok"); }
				return response.json();
			})
			.then(data => {
				console.log(data);
				setTodoList(data);
			})
			.catch(error => {
				console.error("qualcosa è andato storto");
			});
	}

	//Metodo per inserire il nuovo oggetto nell'array
	function addTodo(event) {

		event.preventDefault();

		const url = "http://localhost:3000/api/todos"
		const config = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		};

		console.log("Sto per inviare: ", config.body);

		fetch(url, config)
			.then(response => {
				if (!response.ok) { throw new Error("Chiamata non ok"); }
				return response.json();
			})
			.then(data => {
				console.log("Risultato aggiunta: ", data);
				setFormData(formDefault); //reset del form
			})
			.catch(error => {
				console.error("qualcosa è andato storto");
			});

		setIsEditing(false);

	}

	//Metodo per aggiornare gli state collegati ai campi del form
	function handleChange(event) {

		const nomeCampo = event.target.name;
		const nuovoValore = event.target.value;
		const tipoCampo = event.target.type;

		// console.log("Campo interessato", nomeCampo);
		// console.log("Tipo campo", tipoCampo);
		// console.log("Nuovo valore", nuovoValore);

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
			<button onClick={getTodos}>Recupera Lista</button>

			{todoList.length
				? <ul>{todoList.map((todoItem, i) => <li key={i}>{todoItem.titolo} - {todoItem.categoria}</li>)}</ul>
				: <p>La lista al momento è vuota</p>
			}
		</div>

		{/* Inserimento nuovo item */}
		<div id="todo-insert">

			{/* Form inserimento */}
			{isEditing == true && (
				<form id="todo-insert-form" onSubmit={addTodo}>
					<label className="vertical">
						<span>Titolo</span>
						<input name="titolo" value={formData.titolo} onChange={handleChange} type="text" placeholder="Titolo ToDo" />
						{formData.titolo == "" && <p className="error">Il titolo è obbligatorio</p>}
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

					<button disabled={isDisabled}>Aggiungi elemento</button>
				</form>
			)}


			{/* Pannello preview */}
			{isEditing == false && (
				<div id="todo-insert-preview">
					<div>Stai per inserire:
						<ul>
							<li>Titolo: {formData.titolo || "vuoto"}</li>
							<li>Descrizione: {formData.descrizione || "vuota"}</li>
							<li>Categoria: {formData.categoria || "nessuna"}</li>
							<li>Importante: {formData.isImportante ? "si" : "no"}</li>
						</ul>
						<button onClick={e => setIsEditing(true)}>Torna all'editing</button>
					</div>
				</div>
			)}


		</div>
	</>
}

export default ToDoList;