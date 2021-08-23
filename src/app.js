const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const routers = require("./routes/index.routes");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routers);

module.exports = app;
