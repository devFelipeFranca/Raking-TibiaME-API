const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const {
  characterInfosRouter,
  rakingExpRouter,
} = require("./routes/index.routes");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/infos", characterInfosRouter);

app.use("/rakingExp", rakingExpRouter);

module.exports = app;
