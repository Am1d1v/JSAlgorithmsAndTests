


function validatePassword(password) {

    if(password.length < 8) {
        return false
    }

    return true
}

console.log(validatePassword('123456'));

module.exports = validatePassword;
