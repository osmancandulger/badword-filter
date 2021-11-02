interface ValidationOptions {
  curse?: boolean;
  negative?: boolean;
  politics?: boolean;
  religion?: boolean;
}
/**
 * @description Get tweet response object
 * @param {data}: any : tweet object element
 */
function checkIsValid(data: string, options: ValidationOptions) {
  const curse = require("./data/tr/curse.json");
  let badWordList: string[] = [];
  try {
    // const negative = require("./data/tr/negative.json");
    // const politics = require("./data/tr/politics.json");
    // const religion = require("./data/tr/religion.json");
    for (let i = 0; i < Object.keys(options).length; i++) {
      const item: string = Object.keys(options)[i];
      badWordList = [].concat(require(`./data/tr/${item.toLowerCase()}.json`));
    }
  } catch (error) {
    console.error(error);
  }
  for (let i = 0; i < badWordList.length; i++) {
    if (data.toLowerCase().includes(badWordList[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}
checkIsValid("", { curse: true, negative: true, politics: true });
