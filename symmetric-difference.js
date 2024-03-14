


function symmetricDifference(array1, array2) {

    const set1 = new Set(array1);
    const set2 = new Set(array2);


    const resultArray = [];

    // If the num doesnt equal to any number in set2 then push it into resultArray
    for( const num of array1){
        if(!set2.has(num)){
            resultArray.push(num);
        }
    }

    // If the num doesnt equal to any number in set1 then push it into resultArray
    for( const num of array2){
        if(!set1.has(num)){
            resultArray.push(num);
        }
    }

    return resultArray;
}

module.exports = symmetricDifference;
