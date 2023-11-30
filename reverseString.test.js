const reverseString = require('./reverse-string');

describe('reverseString()', () => {

  it('Shoud yield a reverse string', () => {
    expect('olleH').toBe(reverseString('Hello'));
    expect('Some string to reverse').toBe(reverseString('esrever ot gnirts emoS'));
  });

});
