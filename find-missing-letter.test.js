const findMissingLetter = require('./find-missing-letter');

test('Find Missing Letter', () => {

  expect(findMissingLetter(['a', 'b', 'd'])).toBe('c');
  expect(findMissingLetter(['a', 'b', 'c', 'e', 'f'])).toBe('d')
  expect(findMissingLetter(['X', 'Z'])).toBe('Y');

});
