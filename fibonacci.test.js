const fibonacci = require('./fibonacci');

describe('fibonacci', () => {

  it('should return the correct Fibonacci number', () => {
    
    expect(fibonacci(0)).toBe(0);

    expect(fibonacci(1)).toBe(1);

    expect(fibonacci(3)).toBe(2);

    expect(fibonacci(6)).toBe(8);

  });

});
