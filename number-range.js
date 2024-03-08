


function numberRange(startNumber, endNumber) {

    // If start number equal to end number return start number
    if(startNumber === endNumber){
        return [startNumber]
    }

    
    const numbersArray = numberRange(startNumber, endNumber - 1);
    numbersArray.push(endNumber);
    return numbersArray;
}

console.log(numberRange(2, 2));
console.log(numberRange(1, 5));

module.exports = numberRange;
