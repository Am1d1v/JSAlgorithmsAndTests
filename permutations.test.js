const permutations = require('./permutations');

test('Permutations', () => {
  
  // Empty string provided
  expect(permutations('')).toStrictEqual(['']);

  expect(permutations('abc')).toStrictEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
  
});
