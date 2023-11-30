
const countOccurrences = require('./countOccurrences');

describe('countOccurrences() Test', () => {

    it('Should yield number of similar letters in the word', () => {
        const inputWord = 'hello';
        const definiteLetter = 'l';

        expect(countOccurrences(inputWord, definiteLetter)).toBe(2);
    })
});