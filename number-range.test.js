const numberRange = require('./number-range');

test('Calculating the range of numbers', () => {
  
  // If start number equal to end number return start number
  expect(numberRange([2, 2])).toBe([2]);

  expect(numberRange([1, 5])).toBe([1, 2, 3, 4, 5]);

});
