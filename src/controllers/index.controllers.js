const { findOne, findAll } = require("../services/index.service");

module.exports = {
  getOne: async (req, res) => {
    const searchResult = await findOne(req);
    res.send(searchResult);
  },
  getAll: async (req, res) => {
    const allResults = await findAll();
    res.send(allResults);
  },
  getToken: async (req, res) => {
    res.send({ token: "Bearer blablabla..." });
  },
};
