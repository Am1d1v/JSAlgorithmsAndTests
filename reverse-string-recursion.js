

function reverseString(string) {

    if(string === ''){
        return '';
    }

    return reverseString(string.substr(1)) + string[0]

}


module.exports = reverseString;
