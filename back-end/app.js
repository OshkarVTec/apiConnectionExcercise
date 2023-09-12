const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

const corsOptions = {
	origin: "http://localhost",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
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
			res.send(response.data);
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
