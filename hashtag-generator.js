

    // Simple Solution
// function generateHashtag(string) {

//     // If provided string longer than 140 or empty return false
//     if(string.trim().length > 140 || string.trim() === '') {
//         console.log(string.trim().length);
//         return false;
//     };

//     // Split(Separate) every word from the provided string
//     const splittedString =  string.trim().split(' ');

//     // Replace every first letter to uppercase
//     for(let i = 0; i < splittedString.length; i++){
//         splittedString[i] = splittedString[i][0].toUpperCase() + splittedString[i].substr(1)
        
//     }

//     // Join (Unite) every separated word in one string
//     const joinedWords =  splittedString.join('');
    

//     return '#' +joinedWords;
// }


    // Solution with reduce();
function generateHashtag(string) {

    // If provided string longer than 140 or empty return false
    if(string.trim().length > 140 || string.trim() === '') {
        console.log(string.trim().length);
        return false;
    };

    // First we separate every single world and make it array element then we join them with reduce()
    const hashtag = string.split(' ')
                          .reduce((tag, word) => {
                          return  tag + word.charAt(0).toUpperCase() + word.substr(1);
                          }, '#');
    
    return hashtag;                      
                        
}

module.exports = generateHashtag;
