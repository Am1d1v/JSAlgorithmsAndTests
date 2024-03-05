const validatePassword = require('./password-validator');

describe('Password Validation', () => {
  
        // Must return true
	test('Password must be at least 8 characters long', () => {
        expect(validatePassword('12345678')).toBe(true);
    })
        // Must return false
	test('Password must be at least 8 characters long', () => {
        expect(validatePassword('123')).toBe(false);
    })

});
