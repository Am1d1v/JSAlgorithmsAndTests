const findMissingNumber = require('./find-missing-number');

test('Finding the missing number', () => {
    // Return 1 if array is empty
    expect(findMissingNumber([])).toBe(1);

    expect(findMissingNumber([1, 2, 3, 4, 6])).toBe(5);
    
});
