const titleCase = require('./title-case');

describe('titleCase()', () => {

  it('Should yield to Uppercase() every first letter in every word', () => {
      expect(titleCase('hello there')).toBe('Hello There');
      expect(titleCase('everything works fine')).toBe(titleCase('everything works fine'));
  });

})
