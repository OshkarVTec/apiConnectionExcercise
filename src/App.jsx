import { useState } from "react";
import classes from "./App.module.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className={classes.container}>
			<h1 className={classes.header}>Búsqueda de datos de frutas</h1>
			<p>Hecho por Oskar Adolfo Villa López. Datos de FruityVice API.</p>
		</div>
	);
}

export default App;
