const axios = require("axios");

const {
  composeInfos,
  composeDays,
  composeRakingExp,
} = require("../shared/utils/func");

const { DAYS } = require("../shared/common/defs");

module.exports = {
  findOne: async (req) => {
    const { name, world } = req.params;
    const url = process.env.URL;
    const today = new Date();

    const response = await axios.get(
      `${url}/?p=Character&name=${name}&world=${world}`
    );

    const date = await composeDays(today, DAYS);

    const { data } = response;
    const composedInfos = await composeInfos(data, date);
    return composedInfos;
  },
  findAll: async () => {
    const url = process.env.URL;
    const res = await axios.get(`${url}?p=Highscores`);
    const { data } = res;
    const composedRakingExp = await composeRakingExp(data);
    return composedRakingExp;
  },
};
