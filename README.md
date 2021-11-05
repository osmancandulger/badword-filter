# Bad Word Filter for TR lang words

You may filter quickly your strings in a couple steps. You can check is provided string is valid ? or you can simply replace bad word with given character.

# Related Functions

## checkIsValid

This function takes two args and returns boolean as validation result.

```
checkIsValid('word':String,{curse:Boolean,negative:Boolean,politics:Boolean,religions:Boolean})

```

| Parameter           | Type     | Description                                   |
| :------------------ | :------- | :-------------------------------------------- |
| `data`              | `string` | **Required**. Your string to validate.        |
| `ValidationOptions` | `object` | **Required**. Your wished badword list types. |

## replaceWordWith

This function takes three args and returns masked string with given pattern as validation result.

```
replaceWordWith('word':String,"*",{curse:Boolean,negative:Boolean,politics:Boolean,religions:Boolean})

```

| Parameter              | Type     | Description                                             |
| :--------------------- | :------- | :------------------------------------------------------ |
| `data`                 | `string` | **Required**. Your string to validate.                  |
| `replacementCharacter` | `string` | **Required**. Your special character using as replacer. |
| `ValidationOptions`    | `object` | **Required**. Your wished badword list types.           |

## Demo

- [CodePen Demo](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)

## Authors

- [@osmancandulger](https://www.github.com/osmancandulger)

## LICENCE

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]()