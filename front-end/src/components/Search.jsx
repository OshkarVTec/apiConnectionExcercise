import classes from "./Search.module.css";

function Search({ value, handleChange, options }) {
	return (
		<>
			<label>Family: </label>
			<select
				value={value}
				onChange={handleChange}
				className={classes.selector}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
}

export default Search;
