import { useState } from "react";

//Componente di Scaffold da cui partire per crearne nuovi

function Componente() {

	let [count, setCount] = useState(0);

	function incrementa() {
		setCount(count + 1);
	}

	return (
		<div className="component">
			{
				(count == 0)
					? <p>Prova a cliccare!</p>
					: <p>Hai cliccato {count} volte!</p>
			}
			<button onClick={incrementa}>Cliccami!</button>
		</div>
	)
}

export default Componente;