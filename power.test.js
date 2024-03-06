const power = require('./power');

describe('Exponent of number', () => {

  test('3 has exponent 3', () => {
    expect(power(3, 3)).toBe(27);
  })

  test('1 has exponent 3', () => {
    expect(power(1, 3)).toBe(1);
  })

  test('10 has exponent 0', () => {
    expect(power(10, 0)).toBe(1);
  })

})
