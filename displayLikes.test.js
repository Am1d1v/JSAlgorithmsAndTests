const displayLikes = require('./display-likes');

describe('displayLikes()', () => {

  test('if array is empty is return "No one likes this"', () => {
      expect(displayLikes('')).toBe('No one likes this')
  });

})
