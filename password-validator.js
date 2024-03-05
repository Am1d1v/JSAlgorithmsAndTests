


function validatePassword(password) {

    // Password must be at least 8 characters long
    const isLengthValid = password.length >= 8;

    // Password must contain at least 1 UpperCase letter
    const hasUpperCase = password.split('')
                                 .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

    // Password must contain at least 1 LowerCase letter
    const hasLowerCase= password.split('')
                                .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());;

    // Password must contain at least 1 digit
    const hasDigit= password.split('')
                            .some((char) => !isNaN(parseInt(char, 10))); 
                                               

    if(isLengthValid && hasUpperCase && hasLowerCase && hasDigit){
        return true
    }

    if(!isLengthValid){
        return ('Password must be at least 8 characters long');
    }
    
    if(!hasUpperCase){
        return ('Password must contain at least 1 UpperCase letter');
    }
    
    if (!hasLowerCase){
        return ('Password must contain at least 1 LowerCase letter');
    }

    if (!hasDigit){
        return ('Password must contain at least 1 digit');
    } 

    return false
}


module.exports = validatePassword;
