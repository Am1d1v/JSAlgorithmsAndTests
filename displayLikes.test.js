const displayLikes = require('./display-likes');

describe('displayLikes()', () => {

  test('if array is empty is return "No one likes this"', () => {
      expect(displayLikes('')).toBe('No one likes this')
  });

  test('if only 1 person likes', () => {
    expect(displayLikes(['Arno'])).toBe('Arno likes this')
  });

  test('if only 2 person like', () => {
    expect(displayLikes(['Arno', 'Jessie'])).toBe('Arno and Jessie likes this')
  });

  test('if more than 2 person like', () => {
    expect(displayLikes(['Arno', 'Jessie', 'Donald', 'Max'])).toBe('Arno, Jessie and other 2 likes this')
  });

})
