import { useState } from "react";
import classes from "./App.module.css";

function App() {
	const [filter, setFilter] = useState("family");
  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

	return (
		<main className={classes.container}>
			<h1 className={classes.header}>Fruit data search</h1>
			<p>Made by Oskar Adolfo Villa López. Data from FruityVice API.</p>
      <section className={classes.formContainer}>
        <label for="filter">Filter by: </label>
        <select value={filter} onChange={handleFilter}>
          <option value="family">Family</option>
          <option value="genus">Genus</option>
          <option value="name">Name</option>
        </select>
      </section>
		</main>
	);
}

export default App;
