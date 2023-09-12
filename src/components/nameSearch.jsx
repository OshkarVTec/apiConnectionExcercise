import classes from "./nameSearch.module.css";

function NameSearch({ fruitName, handleFruitName }) {
	return (
		<>
			<label>Fruit Name: </label>
			<input
				type="text"
				value={fruitName}
				onChange={handleFruitName}
				className={classes.input}
			></input>
		</>
	);
}

export default NameSearch;
