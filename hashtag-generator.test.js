const generateHashtag = require('./hashtag-generator');

test('Generating Hashtags', () => {
    
    
    expect(generateHashtag(('something very interesting text'))).toBe('SomethingVeryInterestingText');

    // Empty string provided
    expect(generateHashtag((''))).toBe(false);

});
