import { useState } from "react";
import axios from "axios";
import classes from "./App.module.css";

import GenusSearch from "./components/genusSearch";
import FamilySearch from "./components/familySearch";
import NameSearch from "./components/nameSearch";

function App() {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [filterType, setFilterType] = useState("family");
	const [family, setFamily] = useState("");
	const [genus, setGenus] = useState("");
	const [fruitName, setFruitName] = useState("");
	const [data, setData] = useState({});

	const handleFilterType = (event) => {
		setFilterType(event.target.value);
	};

	const handleFamily = (event) => {
		setFamily(event.target.value);
	};

	const handleGenus = (event) => {
		setGenus(event.target.value);
	};

	const handleFruitName = (event) => {
		setFruitName(event.target.value);
	};

	const handleCall = () => {
		setIsLoading(true);
		let url = "https://www.fruityvice.com/";
		if (filterType === "family") {
			url += "api/fruit/family/" + family;
		} else if (filterType === "genus") {
			url += "api/fruit/genus/" + genus;
		} else if (filterType === "name") {
			url += "api/fruit/" + fruitName;
		}
		axios
			.get(url)
			.then((response) => {
				setError("");
				setData(response.data);
				console.log(data);
			})
			.catch((error) => {
				if (error.response) {
					// Server responded with error
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
					setError("No data found");
				} else if (error.request) {
					// No response from server
					console.log(error.request);
					setError("Could not connect, please try again later");
				} else {
					// Error while constructing the request
					console.log("Error", error.message);
					setError("Unknown error");
				}
				console.log(error.config);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<main className={classes.container}>
			<h1 className={classes.header}>Fruit data search</h1>
			<p>Made by Oskar Adolfo Villa López. Data from FruityVice API.</p>
			<section className={classes.formContainer}>
				<div>
					<label>Filter by: </label>
					<select
						value={filterType}
						onChange={handleFilterType}
						className={classes.selector}
					>
						<option value="family">Family</option>
						<option value="genus">Genus</option>
						<option value="name">Name</option>
					</select>
				</div>
				<div>
					{filterType === "family" && (
						<FamilySearch family={family} handleFamily={handleFamily} />
					)}
					{filterType === "genus" && (
						<GenusSearch genus={genus} handleGenus={handleGenus} />
					)}
					{filterType === "name" && (
						<NameSearch
							fruitName={fruitName}
							handleFruitName={handleFruitName}
						/>
					)}
				</div>

				<button
					disabled={isLoading}
					className={classes.btn}
					onClick={handleCall}
				>
					{!isLoading && "Search"}
					{isLoading && "Loading..."}
				</button>
				{error !== "" && <p className={classes.error}>{error}</p>}
			</section>
		</main>
	);
}

export default App;
