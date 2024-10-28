const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = () => {
	return new Promise((resolve, reject) => {
		const URI = process.env.DB_URI;
		mongoose
			.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(() => {
				console.log("Connected to mongodb");
				resolve();
			})
			.catch((err) => {
				console.log("Error in connecting", err.message);
				reject();
			});
	});
};

module.exports = connectToMongo;
