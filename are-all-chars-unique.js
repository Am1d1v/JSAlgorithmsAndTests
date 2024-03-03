

const areAllCharactersUnique = (string) => {
    
    const charCount = {
        
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        
        // If not all chars are unique return false
        if(charCount[char]){
            return false
        }

        // Add new value to the initial empty object and set this value as true
        charCount[char] = true;
    }

    return true
}


module.exports = areAllCharactersUnique;