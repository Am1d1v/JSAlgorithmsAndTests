

function isPalindrome(word) {
    let i = 0;
    let j = word.length

    for(let l = 0; l <= j; l++){
        if(word[i] !== word[j - 1]){
            console.log('Word is not a palindrome');
            return false
        } else {
            i++;
            j--;
            if(word[i] == word[j - 1]){
                console.log('Word is palindrome');
                return true
            }
        }
    }
}
isPalindrome('madam');
isPalindrome('madame');
isPalindrome('MAdaM');

module.exports = isPalindrome;