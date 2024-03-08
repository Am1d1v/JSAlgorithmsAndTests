


function permutations(string) {

    // Array of permutation
    let result = [];

    if(string.length === 0 ){
        result.push('');
        return result;
    }

    for (let i = 0; i < string.length; i++) {

        // First char of the string
        const firstChar = string[i];

        // Rest chars of the string
        const restOfString = string.slice(0, i) + string.slice(i + 1)

        const subPermutation = permutations(restOfString);

        for (let j = 0; j < subPermutation.length; j++) {
            result.push(firstChar + subPermutation[j]);
        }
    }

    return result;
}

console.log(permutations('abc'));


module.exports = permutations;
