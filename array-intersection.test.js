const arrayIntersection = require('./array-intersection');

describe('Array Intersection', () => {

    test('Finding array intersection', () => {
        expect(arrayIntersection([1, 2, 3, 4 ,5], [1, 3, 5])).toEqual([1, 3, 5]);
        expect(arrayIntersection([1, 1, 1], [2, 2, 2])).toEqual([]);
    });
})
