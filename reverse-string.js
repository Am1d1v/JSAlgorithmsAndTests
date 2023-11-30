

function reverseString(string){

    let empty = '';

    for (let i = string.length - 1; i >= 0; i--) {
        empty += string[i];
    }
    console.log(empty);
    return empty;
}
reverseString('Hello');
reverseString('Have a nice day');
reverseString('Some string to reverse');

module.exports = reverseString;
