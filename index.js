const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const connectToMongo = require("./db.js");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser("soccer"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload({}));

app.set("view engine", "ejs");
app.use(express.json());

app.use(express.static("public"));

const page = require("./routes/pages");
const match = require("./routes/match");
const user = require("./routes/user");

app.use("/", page);
app.use("/", user);
app.use("/", match);

connectToMongo()
	.then(() => {
		app.listen(process.env.PORT, async () => {
			console.log("Server is running at ", process.env.PORT);
		});
	})
	.catch((err) => console.log("Error", err));
