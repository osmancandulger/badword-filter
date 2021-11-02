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
  const string: string[] = data.split(" ");
  let badWordList: string[] = [];
  let isValid: boolean = true;
  try {
    for (let i = 0; i < Object.keys(options).length; i++) {
      const item: string = Object.keys(options)[i];
      badWordList = [].concat(require(`./data/tr/${item.toLowerCase()}.json`));
    }
  } catch (error) {
    console.error(error);
  }
  for (let i = 0; i < badWordList.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (badWordList[i].toLowerCase() === string[j].toLowerCase()) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
}
/**
 * @description Get tweet response object
 * @param {data}: any : tweet object element
 */
function wordReplaceWith(
  data: string,
  replacer: string,
  options: ValidationOptions
) {
  let string: string[] = data.split(" ");
  let badWordList: string[] = [];
  let isValid: boolean = true;
  try {
    for (let i = 0; i < Object.keys(options).length; i++) {
      const item: string = Object.keys(options)[i];
      badWordList = [].concat(require(`./data/tr/${item.toLowerCase()}.json`));
    }
  } catch (error) {
    console.error(error);
  }
  for (let i = 0; i < badWordList.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (badWordList[i].toLowerCase() === string[j].toLowerCase()) {
        isValid = false;
        string[string.indexOf(string[j])] = replacer.repeat(string[j].length);
        break;
      }
    }
  }
  return string.join(" ");
}
console.log(
  wordReplaceWith("merhaba Jakoben", "*", {
    curse: true,
    negative: true,
    politics: true,
  })
);
