const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// Database from dotenv file
const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

// MongoDB Connection
mongoose.connect(DB).then((con) => {
	// console.log(con);
	console.log("DB Connection Successful!");
});

// PORT Variable Declaration
const port = process.env.port || 3000;

// Starting Application
app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
