const symmetricDifference = require('./symmetric-difference');

describe('Symmetric Difference of Two Arrays', () => {

  test('It should return Symmetric Difference of Two Arrays', () => {

    const array1 = [1, 2, 2, 3];
    const array2 = [2, 3, 3, 5];

    expect(symmetricDifference(array1, array2)).toEqual([1, 5]);

  })


  test('It should return Symmetric Difference of Two Arrays', () => {

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    expect(symmetricDifference(array1, array2)).toEqual([1, 2, 3, 4, 5, 6]);

  })


  test('It should return empty array', () => {

    const array1 = [1, 2, 2, 3];
    const array2 = [1, 2, 2, 3];

    expect(symmetricDifference(array1, array2)).toEqual([]);

  })


})
