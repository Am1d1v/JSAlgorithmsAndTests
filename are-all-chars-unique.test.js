const areAllCharactersUnique = require('./are-all-chars-unique');

test('Unique Characters in a String', () => {

  expect(areAllCharactersUnique('abcdef')).toBe(true);

  // If we receive empty string return true
  expect(areAllCharactersUnique('')).toBe(true);

  expect(areAllCharactersUnique('abacdef')).toBe(false);

});
