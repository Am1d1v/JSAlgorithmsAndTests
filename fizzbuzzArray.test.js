const fizzBuzzArray = require('./fizzbuzz-array');

describe('fizzBuzzArray()', () => {

    test('If the number is divisible by 3 print out "Fizz" instead, If the number is divisible by 5 print out "Buzz" instead, If the number is divisible by both 3 and 5 print out "FizzBuzz" insted', () => {
        expect(fizzBuzzArray(10)).toStrictEqual([
                                        0,          1,      2,
                                        'Fizz',     4,      'Buzz',
                                        'Fizz',     7,      8,
                                        'Fizz',     'Buzz'])
    });

    test('If the number is divisible by 3 print out "Fizz" instead, If the number is divisible by 5 print out "Buzz" instead, If the number is divisible by both 3 and 5 print out "FizzBuzz" insted', () => {
        expect(fizzBuzzArray(20)).toStrictEqual([
                                                     0,          1,      2,
                                                     'Fizz',     4,      'Buzz',
                                                     'Fizz',     7,      8,
                                                     'Fizz',     'Buzz', 11,
                                                     'Fizz',     13,     14,
                                                     'FizzBuzz', 16,     17,
                                                     'Fizz',     19,     'Buzz'
        ])
    });

})
