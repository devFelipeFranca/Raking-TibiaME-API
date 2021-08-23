const { findOne } = require("../services/index.service");

module.exports = {
  getAll: async (req, res) => {
    const searchResult = await findOne(req);
    res.send(searchResult);
  },
  getToken: async (req, res) => {
    res.send({ token: "Bearer blablabla..." });
  },
};
