const { findOne, findAll } = require("../services/index.service");

module.exports = {
  getOne: async (req, res) => {
    const searchResult = await findOne(req);
    res.send(searchResult);
  },
  getAll: async (req, res) => {
    const allResults = await findAll(req);
    res.send(allResults);
  },
};
