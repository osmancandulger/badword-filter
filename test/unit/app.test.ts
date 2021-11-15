const { checkIsValid, replaceWordWith } = require('../../app.ts');
test('Result should false for given string', () => {
  expect(
    checkIsValid('O çok Yavşak birisi!', {
      language: 'tr',
      swear: true,
      negative: true,
    }),
  ).toEqual(false);
});

test('Result should be * masked for filtered words', () => {
  expect(
    replaceWordWith('O çok yavşak birisi!', '*', {
      language: 'tr',
      swear: true,
      negative: true,
    }),
  ).toEqual('O çok ****** birisi!');
});
test('Result should be false for uppercase and lowercase strings', () => {
  expect(
    checkIsValid('O çok dış MihrAk birisi!', {
      language: 'tr',
      political: true,
    }),
  ).toEqual(false);
});
test('Should throw console.error', () => {
  try {
    expect(
      checkIsValid('O çok dış MihrAk birisi!', { language: 'tr', asd: true }),
    ).toMatch('TSError');
  } catch (e) {
    expect(e).toBeFalsy;
  }
});
test('Should throw console.error', () => {
  try {
    expect(
      replaceWordWith('O çok dış MihrAk birisi!', '*', {
        language: 'tr',
        asd: true,
      }),
    ).toMatch('TSError');
  } catch (e) {
    expect(e).toBeFalsy;
  }
});
test('Should returns false for given string', () => {
  expect(checkIsValid('fuck', { language: 'en', swear: true })).toEqual(false);
});
test('Should returns masked string for given string', () => {
  expect(replaceWordWith('fuck', '*', { language: 'en', swear: true })).toEqual(
    '****',
  );
});
