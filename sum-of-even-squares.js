

function sumOfEvenSquares(arr) {

    // Filter only Even Numbers
    const filteredArray = arr.filter((number) => number % 2 === 0 );
    
    let sum = 0

    filteredArray.forEach((item) => {
        sum += item ** 2;
    })

    return sum;
}


module.exports = sumOfEvenSquares;
