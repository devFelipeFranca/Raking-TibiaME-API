const DOMParser = require("dom-parser");

const reverseType = (array = []) => {
  const firstPosition = array.shift();
  array.reverse();
  return [firstPosition, ...array];
};

module.exports = {
  composeInfos: async (data, date) => {
    const DOM = new DOMParser().parseFromString(data, "text/html");
    const accountName = DOM.getElementsByTagName("b")[11]?.innerHTML;

    if (!accountName) return { message: "character doesn't have raking" };

    const characterInfos = {
      name: DOM.getElementsByTagName("b")[11]?.innerHTML,
      world:
        DOM.getElementsByTagName("b")[10].getElementsByTagName("a")[0]
          ?.innerHTML,
      currentLevel: DOM.getElementsByTagName("b")[8]?.innerHTML,
      classType: DOM.getElementsByTagName("b")[13]?.innerHTML.split(">")[1],
      currentExp: DOM.getElementsByTagName("b")[16]?.innerHTML.split(" ")[1],
      currentExpToNextLevel: DOM.getElementsByTagName("td")[9]
        ?.innerHTML.split("<")[0]
        .split(" ")[0],
      lastWeekExp: [
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[1]
          ?.innerHTML.split(" ")[0],
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[3]
          ?.innerHTML.split(" ")[0],
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[5]
          ?.innerHTML.split(" ")[0],
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[7]
          ?.innerHTML.split(" ")[0],
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[9]
          ?.innerHTML.split(" ")[0],
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[11]
          ?.innerHTML.split(" ")[0],
        DOM.getElementsByTagName("table")[4]
          .getElementsByTagName("b")[13]
          ?.innerHTML.split(" ")[0],
      ],
      lastWeekDays: [...date],
    };

    return characterInfos;
  },
  composeDays: async (today, days) => {
    const LENGTH = days.length;
    const orderedDays = [];
    for (let index = today.getDay(); index < LENGTH; index += 1) {
      orderedDays.push(days[index]);
    }
    for (let index = 0; index < today.getDay(); index += 1) {
      orderedDays.push(days[index]);
    }

    return reverseType(orderedDays);
  },
  composeRakingExp: async (data, amount = 10) => {
    const DOM = new DOMParser().parseFromString(data, "text/html");
    const rakingList = [];

    for (
      counter = 1,
        indexName = 15,
        indexRaking = 14,
        indexLevel = 18,
        indexWorld = 17,
        indexCurrentExp = 4,
        indexClassType = 15;
      counter <= amount;
      counter += 1,
        indexRaking += 12 + counter,
        indexName += 10,
        indexLevel += 10,
        indexClassType += 10,
        indexWorld += 10,
        indexCurrentExp += 10
    ) {
      const aux = {
        name: DOM.getElementsByTagName("b")[indexName].getElementsByTagName(
          "a"
        )[0]?.innerHTML,
        currentLevel: DOM.getElementsByTagName("b")[indexLevel]?.innerHTML,
        world: DOM.getElementsByTagName("b")[indexWorld]?.innerHTML,
        classType:
          DOM.getElementsByTagName("b")[
            indexClassType
          ]?.parentNode?.innerHTML.split('"')[5],
        raking: counter,
      };
      rakingList.push(aux);
    }

    return rakingList;
  },
};
