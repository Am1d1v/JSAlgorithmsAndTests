const sumOfEvenSquares = require('./sum-of-even-squares');

test('Sum of even squares', () => {
  
    expect(sumOfEvenSquares([-15, -1, 0, 2, 4, 6])).toBe(56);

    expect(sumOfEvenSquares([])).toBe(0);

    expect(sumOfEvenSquares([1, 2, 3, 4, 5])).toBe(20);
});
