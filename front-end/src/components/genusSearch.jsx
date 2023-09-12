import classes from "./genusSearch.module.css";

function GenusSearch({ genus, handleGenus }) {
	const options = ["genus1", "genus2", "genus3"];
	return (
		<>
            <label>Genus: </label>
			<select value={genus} onChange={handleGenus} className={classes.selector}>
				{options.map((option) => (
					<option key={option}value={option}>{option}</option>
				))}
			</select>
		</>
	);
}

export default GenusSearch;
