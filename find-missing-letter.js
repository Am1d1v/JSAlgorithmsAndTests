
// Solution using alphabet
// function findMissingLetter(arr) {

//     // Alphabet with lowercase and uppercase letters
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

//     // Starting point
//     const startIndex = alphabet.indexOf(arr[0])

//     for(let i = 0; i < arr.length; i++){
//         if( arr[i] !== alphabet[startIndex + i]){
//             return alphabet[startIndex + i];
//         };
//     }

//     return '';
// }



// Solution using char unicode
function findMissingLetter(arr){
    let start = arr[0].charCodeAt();

    for(let i = 0; i < arr.length; i++){

        // Current charCode value
        const current = arr[i].charCodeAt(0);
        console.log(current);

        if(current - start > 1){
            return String.fromCharCode(start + 1);
        }

        start = current;
    }

    return '';

}
console.log(findMissingLetter(['a', 'b', 'd']));


module.exports = findMissingLetter;
