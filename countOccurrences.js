

// function countOccurrences(word, definiteLetterInWord) {

//     const wordLength = word.length

//     let similarLetters = 0;

//     for (let i = 0; i < wordLength; i++) {
//         if(word[i] === definiteLetterInWord){
//             similarLetters++;
//         }
//     }
//     console.log(similarLetters);
// }
// countOccurrences('hello', 'l'); //2
// countOccurrences('hello', 'h'); //1
// countOccurrences('hello', 'y'); //0

// Splitted Method
function countOccurrences(word, definiteLetterInWord){

    const splitted = word.split('');
    let similarLetters = 0;

    for (let i = 0; i < word.length; i++) {
        if(splitted[i] === definiteLetterInWord){
            similarLetters++;
        }
    }
    return similarLetters;
}
// countOccurrences('hello', 'l'); // 2
// countOccurrences('hello', 'h'); //1
// countOccurrences('hello', 'y'); //0
// countOccurrences('Y y Yy yY', 'y'); //3

module.exports = countOccurrences;
