const axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.get("/:filterType/:keyword", (req, res) => {
	let url = "https://www.fruityvice.com/api/";
	console.log(req.params.filterType);
	console.log(req.params.keyword);
	if (req.params.filterType === "family") {
		url += "fruit/family/" + req.params.keyword;
	} else if (req.params.filterType === "genus") {
		url += "fruit/genus/" + req.params.keyword;
	} else if (req.params.filterType === "name") {
		url += "fruit/" + req.params.keyword;
	}
	console.log(url);
	axios
		.get(url)
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => {
			res.send(error);
		});
});

app.listen(port, () => {
	console.log(`Backend for fruit data search ${port}`);
});
