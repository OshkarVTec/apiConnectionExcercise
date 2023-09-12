const express = require("express");
const app = express();
const port = 3000;

app.get("/:filterType/:keyword", (req, res) => {
	console.log(req.params.filterType)
    res.send(req.params.keyword);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
