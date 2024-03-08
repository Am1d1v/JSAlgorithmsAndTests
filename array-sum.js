


function arraySum(array) {

    if(array.length === 0){
        return 0;
    }


    return array[0] + arraySum(array.slice(1));
}

console.log(arraySum([0]));
console.log(arraySum([1, 2, 3]));
console.log(arraySum([-5, 10, -20]));

module.exports = arraySum;
