import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";

function ToDoList() {

	const [todoItem, setTodoItem] = useState({});

	const { id } = useParams();

	const navigate = useNavigate();

	//Recupero ToDo all'avvio del componente
	// getTodos(); //errore! andrebbe in loop!
	useEffect(getTodo, []); //metodo corretto

	function getTodo() {

		const url = `http://localhost:3000/api/todos/${id}`

		fetch(url)
			.then(response => {
				if (!response.ok) { throw new Error("Chiamata non ok"); }
				return response.json();
			})
			.then(data => {
				console.log(data);
				setTodoItem(data);
			})
			.catch(error => {
				console.error("qualcosa è andato storto");
				// navigate("/todo");
			});
	}

	return <>
		<div id="todo-insert-preview">
			<div>Dettagli del ToDo con id {id}
				<ul>
					<li>Titolo: {todoItem.titolo || "vuoto"}</li>
					<li>Descrizione: {todoItem.descrizione || "vuota"}</li>
					<li>Categoria: {todoItem.categoria || "nessuna"}</li>
					<li>Importante: {todoItem.isImportante ? "si" : "no"}</li>
				</ul>
			</div>
			<Link to="/todo">Torna alla lista</Link>
		</div>
	</>
}

export default ToDoList;