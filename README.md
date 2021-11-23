# Bad Word Filter for EN && TR lang words

![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/osmancandulger/bdfb7916de152ee25cd78a35bdc9098e/raw/badword-filter__heads_main.json) <br>

You may filter quickly your strings in a couple steps. You can check is provided string is valid ? or you can simply replace bad word with given character.(You can use swear words list only for English language for now.)

# Related Functions

You can import related functions as follows;

```javascript
import { checkIsValid, replaceWordWith } from 'badword-list';
```

## checkIsValid

This function takes two args and returns boolean as validation result. <br>
You can use swear words list only for English language for now.

```javascript
const ValidationOptions: object = {
  swear: boolean,
  negative: boolean,
  political: boolean,
  religions: boolean,
};

checkIsValid('word', ValidationOptions);
```

| Parameter           | Type     | Description                                   |
| :------------------ | :------- | :-------------------------------------------- |
| `data`              | `string` | **Required**. Your string to validate.        |
| `ValidationOptions` | `object` | **Required**. Your wished badword list types. |

## replaceWordWith

This function takes three args and returns masked string with given pattern as validation result. <br>
You can use swear words list only for English language for now.

```javascript
const ValidationOptions: object = {
  swear: boolean,
  negative: boolean,
  political: boolean,
  religions: boolean,
};
replaceWordWith('word', '*', ValidationOptions);
```

| Parameter              | Type     | Description                                             |
| :--------------------- | :------- | :------------------------------------------------------ |
| `data`                 | `string` | **Required**. Your string to validate.                  |
| `replacementCharacter` | `string` | **Required**. Your special character using as replacer. |
| `ValidationOptions`    | `object` | **Required**. Your wished badword list types.           |

## Demo

- [CodeSandBox Demo](https://codesandbox.io/s/badword-filter-demo-sxtz6?file=/src/App.vue)
- [CodePen Demo](https://codepen.io/osmancandulger/pen/wvqXKdz)

## Authors

- [@osmancandulger](https://www.github.com/osmancandulger)

## LICENCE

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]()
