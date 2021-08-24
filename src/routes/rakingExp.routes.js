const routers = require("express").Router();

const useController = require("../controllers/index.controllers");

routers.get("/", useController.getAll);

module.exports = routers;
