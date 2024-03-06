const factorial = require('./factorial');

describe('Factorials recursion test', () => {

  test('Factorial of 3', () => {
    expect(factorial(3)).toBe(6);
  })

  test('Factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  })

  test('Factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  })

  test('Factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  })

})
