


function findMissingNumber(array){

    // Return 1 if array is empty
    if(array.length === 0) return 1;

    const n = array.length + 1;

    // Expected sum of all numbers in the array
    const expectedSum = (n * (n + 1)) / 2;

    // Actual sum of all numbers in the array
    let actualSum = 0;

    for (let i = 0; i < array.length; i++) {
        actualSum += array[i];
    }

    // Missing number
    const missingNumber = expectedSum - actualSum;
    console.log(missingNumber);
    
    return missingNumber;
}    


module.exports = findMissingNumber;
