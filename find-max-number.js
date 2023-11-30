

const arr0 = [1, 5, -9, 12, -4, 6, 0]
const arr1 = [-1, -5, 9, -12, 4, -6, 0]
const arr2 = [2, 6, -10, 13, 5, -7, 0]

function findMaxNumber(array){

    let maxNumber = 0;

    for (let i = 0; i < array.length; i++) {
       if(array[i] >= maxNumber){
        maxNumber = array[i];
       }
    }

    //console.log(maxNumber)
    return maxNumber;
}
findMaxNumber(arr0);
findMaxNumber(arr1);
findMaxNumber(arr2);

module.exports = findMaxNumber;
