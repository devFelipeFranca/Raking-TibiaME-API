const axios = require("axios");

const {
  composeInfos,
  composeDays,
  composeRakingExp,
} = require("../shared/utils/func");

const { DAYS, URL } = require("../shared/common/defs");

module.exports = {
  findOne: async (req) => {
    const { name, world } = req.params;
    const today = new Date();
    const response = await axios.get(
      `${URL}/?p=Character&name=${name}&world=${world}`
    );
    const date = await composeDays(today, DAYS);
    const { data } = response;
    const composedInfos = await composeInfos(data, date);
    return composedInfos;
  },
  findAll: async (req) => {
    const { amount } = req.params;
    const res = await axios.get(`${URL}?p=Highscores`);
    const { data } = res;
    const composedRakingExp = await composeRakingExp(data, amount);
    return composedRakingExp;
  },
};
