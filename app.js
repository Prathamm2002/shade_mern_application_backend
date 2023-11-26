const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require(`./routes/shadeRoutes`);

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
	console.log("Hello from the middleware!");
	next();
});
app.use("/shadeapplication", router);

module.exports = app;
