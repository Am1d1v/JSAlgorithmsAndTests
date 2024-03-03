

// function sumOfEvenSquares(arr) {

//     // Filter only Even Numbers
//     const filteredArray = arr.filter((number) => number % 2 === 0 );
    
//     let sum = 0

//     filteredArray.forEach((item) => {
//         sum += item ** 2;
//     })

//     return sum;
// }


function sumOfEvenSquares(arr) {

        // Filter only Even Numbers
        const evenSquares = arr.filter((number) => number % 2 === 0 )
                               .map((num) => num ** 2)
                               .reduce((sum, squaredNumber) => sum + squaredNumber, 0);
                                
        console.log(evenSquares);
        
        return evenSquares;
    }


module.exports = sumOfEvenSquares;
