const sumUpTo = require('./sum-up-to')

test('Summing up positive integers', () => {
  
  expect(sumUpTo(3)).toBe(6);
  expect(sumUpTo(5)).toBe(15);

});
