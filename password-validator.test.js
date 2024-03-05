const validatePassword = require('./password-validator');

describe('Password Validation', () => {
  

	test('Password must be at least 8 characters long', () => {
        expect(validatePassword('123')).toBe('Password must be at least 8 characters long');
    })

	test('Password must contain at least 1 UpperCase letter', () => {
        expect(validatePassword('a123456789')).toBe('Password must contain at least 1 UpperCase letter');
    })

	test('Password must contain at least 1 LowerCase letter', () => {
        expect(validatePassword('A123456789')).toBe('Password must contain at least 1 LowerCase letter');
    })

	test('Password must contain at least 1 digit', () => {
        expect(validatePassword('AbcaBcabC')).toBe('Password must contain at least 1 digit');
    })

	test('True Password Validation', () => {
        expect(validatePassword('A1bcdefga')).toBe(true);
    })

});
