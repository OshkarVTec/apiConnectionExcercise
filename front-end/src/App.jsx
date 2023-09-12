import { useState } from "react";
import axios from "axios";
import classes from "./App.module.css";

import Search from "./components/Search";
import NameSearch from "./components/nameSearch";
const optionsFamily = ["family1", "family2", "family3"];
const optionsGenus = ["family1", "family2", "family3"];

function App() {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [filterType, setFilterType] = useState("family");
	const [family, setFamily] = useState(optionsFamily[0]);
	const [genus, setGenus] = useState(optionsGenus[0]);
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

	const handleCall = (event) => {
		event.preventDefault();
		setIsLoading(true);
		let url = "http://localhost:3000/" + filterType + "/";
		if (filterType === "family") {
			url += family;
		} else if (filterType === "genus") {
			url += genus;
		} else if (filterType === "name") {
			url += fruitName;
		}
		console.log(url);
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
				<form className={classes.formContainer} onSubmit={handleCall}>
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
							<Search value={family} handleChange={handleFamily} options={optionsFamily} />
						)}
						{filterType === "genus" && (
							<Search value={genus} handleChange={handleGenus} options={optionsGenus}/>
						)}
						{filterType === "name" && (
							<NameSearch
								fruitName={fruitName}
								handleFruitName={handleFruitName}
							/>
						)}
					</div>

					<input
						disabled={isLoading}
						className={classes.btn}
						type="submit"
						value={(!isLoading && "Search") || (isLoading && "Loading...")}
					></input>
				</form>
				{error !== "" && <p className={classes.error}>{error}</p>}
			</section>
		</main>
	);
}

export default App;
