


function generateHashtag(string) {

    // If provided string longer than 140 or empty return false
    if(string.trim().length > 140 || string.trim() === '') {
        console.log(string.trim().length);
        return false;
    };

    // Split(Separate) every word from the provided string
    const splittedString =  string.trim().split(' ');

    // Replace every first letter to uppercase
    for(let i = 0; i < splittedString.length; i++){
        splittedString[i] = splittedString[i][0].toUpperCase() + splittedString[i].substr(1)
        
    }

    // Join (Unite) every separated word in one string
    const joinedWords =  splittedString.join('');
    

    return '#' +joinedWords;
}

console.log(generateHashtag('something very interesting text'));

module.exports = generateHashtag;
