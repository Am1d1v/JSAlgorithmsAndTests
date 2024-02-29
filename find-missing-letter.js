
// Solution using alphabet
function findMissingLetter(arr) {

    // Alphabet with lowercase and uppercase letters
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // Starting point
    const startIndex = alphabet.indexOf(arr[0])

    for(let i = 0; i < arr.length; i++){
        if( arr[i] !== alphabet[startIndex + i]){
            return alphabet[startIndex + i];
        };
    }

    return '';
}

const res = findMissingLetter(['a', 'b', 'c', 'f', 'g']);
console.log(res);

module.exports = findMissingLetter;
