interface ValidationOptions {
  curse?: boolean;
  negative?: boolean;
  politics?: boolean;
  religion?: boolean;
}

/**
 * @description Check given string to validate
 * @param {data}: string : text to validate
 * @param {options}: ValidationOptions : ValidationOptions option to fetch related word lists
 */
export const checkIsValid = (data: string, options: ValidationOptions) => {
  let string: any[] = data.split(' ');
  let badWordList: string[] = [];
  let isValid: boolean = true;
  try {
    for (const [key, value] of Object.entries(options)) {
      if (value) {
        const item: string = key;
        const data: any = require(`./data/tr/${item.toLowerCase()}.json`);
        badWordList.push(...data);
      }
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
};
/**
 * @description Replace bad word with given mask string
 * @param {data}: string : text to validate
 * @param {replacer}: string : mask string to replace it
 * @param {options}: ValidationOptions : ValidationOptions option to fetch related word lists
 */
export const replaceWordWith = (
  data: string,
  replacer: string,
  options: ValidationOptions,
) => {
  let string: any[] = data.split(' ');
  let badWordList: string[] = [];
  try {
    for (const [key, value] of Object.entries(options)) {
      if (value) {
        const item: string = key;
        const data: any = require(`./data/tr/${item.toLowerCase()}.json`);
        badWordList.push(...data);
      }
    }
  } catch (error) {
    console.error(error);
  }
  for (let i = 0; i < badWordList.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (badWordList[i].toLowerCase() === string[j].toLowerCase()) {
        string[string.indexOf(string[j])] = replacer.repeat(
          string[j].length - 1,
        );
        break;
      }
    }
  }
  return string.join(' ');
};
