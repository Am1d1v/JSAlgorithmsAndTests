const generateHashtag = require('./hashtag-generator');

test('Generating Hashtags', () => {
    
    
    expect(generateHashtag(('something very interesting text'))).toBe('#SomethingVeryInterestingText');

    expect(generateHashtag(('   hello world   '))).toBe('#HelloWorld');

    // Empty string provided
    expect(generateHashtag((''))).toBe(false);

});
