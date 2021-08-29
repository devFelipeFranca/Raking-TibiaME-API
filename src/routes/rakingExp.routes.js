const routers = require("express").Router();

const useController = require("../controllers/index.controllers");

routers.get("/?:amount", useController.getAll);

module.exports = routers;
