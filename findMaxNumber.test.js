const findMaxNumber = require('./find-max-number');

describe('findMaxNumber() Test', () => {

    it('Should yield max number of array', () => {
        expect(findMaxNumber([1, 2, 3])).toBe(3);
        expect(findMaxNumber([-1, 12, 10, -50, 53, 8])).toBe(53);
    })

})