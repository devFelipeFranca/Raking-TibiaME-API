const routers = require("express").Router();

const useController = require("../controllers/index.controllers");

routers.get("/:name&:world", useController.getAll);

module.exports = routers;
