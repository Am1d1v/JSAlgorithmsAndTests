const arraySum = require('./array-sum');

test('Calculate Sum of Array Using Recursion', () => {
  
    // If empty string provided return 0
  expect(arraySum([])).toBe(0);

  expect(arraySum([1, 2, 3])).toBe(6);

  expect(arraySum([-5, 10, -20])).toBe(-15);

});
