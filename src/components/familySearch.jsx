import classes from "./familySearch.module.css";

function FamilySearch({ family, handleFamily }) {
	const options = ["family1", "family2", "family3"];
	return (
		<>
            <label>Family: </label>
			<select value={family} onChange={handleFamily} className={classes.selector}>
				{options.map((option) => (
					<option key={option}value={option}>{option}</option>
				))}
			</select>
		</>
	);
}

export default FamilySearch;
