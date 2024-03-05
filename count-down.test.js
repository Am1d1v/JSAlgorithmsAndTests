const countDown = require('./count-down');

describe('countDown', () => {
  
  it('Should return 1 if providedv number equal to 1', () => {
    
    expect(countDown(1)).toBe(1);

  })

  it('Should return sum of (provided number + provided number - 1) until provided number is equal to 1', () => {
    
    expect(countDown(3)).toBe(6);

  })


});
