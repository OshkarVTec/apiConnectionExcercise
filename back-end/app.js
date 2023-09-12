const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

// Code from : https://www.tutorialspoint.com/flattening-a-json-object-in-javascript
const flattenJSON = (obj = {}, res = {}, extraKey = "") => {
	for (key in obj) {
		if (typeof obj[key] !== "object") {
			res[extraKey + key] = obj[key];
		} else {
			flattenJSON(obj[key], res, `${extraKey}${key}.`);
		}
	}
	return res;
};

app.get("/:filterType/:keyword", cors(), (req, res) => {
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
			if (Array.isArray(response.data)) {
				res.send(response.data.map((json) => flattenJSON(json)));
			} else {
				res.send([flattenJSON(response.data)]);
			}
		})
		.catch((error) => {
			if (error.response) {
				// Server responded with error
				res.status(404).send();
			}
		});
});

app.listen(port, () => {
	console.log(`Backend for fruit data search ${port}`);
});
