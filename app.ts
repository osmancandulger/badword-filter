const curse = require("./data/tr/curse.json");
const negative = require("./data/tr/negative.json");
const politics = require("./data/tr/politics.json");
const religion = require("./data/tr/religion.json");

/**
 * @description Get tweet response object
 * @param {data}: any : tweet object element
 */
function checkIsValid(data: string) {
  const badWordList = curse.concat(negative, politics, religion);
  for (let i = 0; i < badWordList.length; i++) {
    if (data.toLowerCase().includes(badWordList[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}
