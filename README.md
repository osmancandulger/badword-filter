# Bad Word Filter for TR lang words

You may filter quickly your strings in a couple steps. You can check is provided string is valid ? or you can simply replace bad word with given character.

# Related Functions

```
You can import related functions as follows;
import { checkIsValid,replaceWordWith } from 'badword-list';
```

## checkIsValid

This function takes two args and returns boolean as validation result.

```
const ValidationOptions:object = {
  curse:boolean,
  negative:boolean,
  politics:boolean,
  religions:boolean
}

checkIsValid('word':string,ValidationOptions)

```

| Parameter           | Type     | Description                                   |
| :------------------ | :------- | :-------------------------------------------- |
| `data`              | `string` | **Required**. Your string to validate.        |
| `ValidationOptions` | `object` | **Required**. Your wished badword list types. |

## replaceWordWith

This function takes three args and returns masked string with given pattern as validation result.

```
const ValidationOptions:object = {
  curse:boolean,
  negative:boolean,
  politics:boolean,
  religions:boolean
}
replaceWordWith('word':string,"*",ValidationOptions)

```

| Parameter              | Type     | Description                                             |
| :--------------------- | :------- | :------------------------------------------------------ |
| `data`                 | `string` | **Required**. Your string to validate.                  |
| `replacementCharacter` | `string` | **Required**. Your special character using as replacer. |
| `ValidationOptions`    | `object` | **Required**. Your wished badword list types.           |

## Demo

- [CodeSandBox Demo](https://codesandbox.io/s/badword-filter-demo-sxtz6?file=/src/App.vue)

## Authors

- [@osmancandulger](https://www.github.com/osmancandulger)

## LICENCE

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]()
