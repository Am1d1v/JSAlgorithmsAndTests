


function validatePassword(password) {

    // Password must be at least 8 characters long
    const isLengthValid = password.length >= 8;

    // Password must contain at least 1 UpperCase letter
    const hasUpperCase = password.split('')
                                 .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

    console.log(hasUpperCase);

    // Password must contain at least 1 LowerCase letter
    const hasLowerCase= '';

    // Password must contain at least 1 digit
    const hasDigit= '';

    if(isLengthValid && hasUpperCase && hasLowerCase && hasDigit){
        return true
    }

    if(!isLengthValid){
        return ('Password must be at least 8 characters long');
    } else if(!hasUpperCase){
        return ('Password must contain at least 1 UpperCase letter');
    } else if (!hasLowerCase){
        return ('Password must contain at least 1 LowerCase letter');
    } else if (hasDigit){
        return ('Password must contain at least 1 digit');
    }

}

console.log(validatePassword('123456789'));
console.log(validatePassword('a123456789'));

module.exports = validatePassword;
