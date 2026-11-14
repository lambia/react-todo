import { useState } from "react";

function Componente() {

	let [variabile, setVariabile] = useState(0);

	return <div className="component">Sono un Componente! State: {variabile}</div>
}

export default Componente;