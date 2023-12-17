const isPalindrome = require('./palindrome');

describe('If word is palindrome returns true, if it is not return false', () => {

    test('is word is palindrome', () => {
        expect(isPalindrome('madam')).toBe(true);
    })

    test('is word is palindrome', () => {
        expect(isPalindrome('MadAm')).toBe(false);
    })
})
