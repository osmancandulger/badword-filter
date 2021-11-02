const { checkIsValid, replaceWordWith } = require("../../app.ts");
test("Result should false for given string", () => {
  expect(
    checkIsValid("O çok Yavşak birisi!", { curse: true, negative: true })
  ).toEqual(false);
});

test("Result should be * masked for filtered words", () => {
  expect(
    replaceWordWith("O çok yavşak birisi!", "*", {
      curse: true,
      negative: true,
    })
  ).toEqual("O çok ***** birisi!");
});
test("Result should be false for uppercase and lowercase strings", () => {
  expect(
    checkIsValid("O çok dış MihrAk birisi!", {
      politics: true,
    })
  ).toEqual(false);
});
