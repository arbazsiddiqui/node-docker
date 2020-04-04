const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
	try {

		console.log(`Got a hit at ${Date()}`);
		const variableToDebug = "docker rules";

		res.status(200).send({message: "Nodemon rules", data : variableToDebug})

	} catch (err) {

		console.log(err);
		res.status(500).send({message: "Something went wrong"})
	}

});

app.listen(port, () => console.log(`app listening on port ${port}!`));