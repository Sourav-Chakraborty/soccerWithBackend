const Player = require("./model/player.js");
const { summary, result: resultData, player } = require("./data.js");
const match_details = require("./model/match_details.js");
const connectToMongo = require("./db.js");
const result = require("./model/result.js");

const seeder = async () => {
	try {
		connectToMongo()
			.then(async () => {
				for (let item of resultData) {
					await match_details.updateOne({ No: item.No }, item, {
						upsert: true,
					});
				}
				for (let item of summary) {
					await result.updateOne({ No: item.No }, item, {
						upsert: true,
					});
				}
				for (let item of player) {
					await Player.updateOne({ id: item.id }, item, {
						upsert: true,
					});
				}
				console.log("Data Seeded");
				process.exit(0);
			})
			.catch((err) => console.log("Error", err));
	} catch (err) {
		console.log(err);
	}
};

seeder();
