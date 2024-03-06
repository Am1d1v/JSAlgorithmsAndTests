const reverseString = require('./reverse-string-recursion');

test('Reversing a string', () => {
  
	expect(reverseString('hello')).toBe('olleh')
	expect(reverseString('')).toBe('')
	expect(reverseString('a')).toBe('a')

});
