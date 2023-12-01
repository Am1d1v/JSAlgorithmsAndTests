


function fizzBuzzArray(num) {

    const arr = [];

    for (let i = 0; i <= num; i++) {
        arr.push(i)

        if(i % 3 === 0 && i != 0){
            arr.pop() && arr.push('Fizz')
        } else if (i % 5 === 0 && i != 0){
            arr.pop() && arr.push('Buzz')
        }  
        if (i % 3 === 0 && i % 5 === 0 && i != 0){
            arr.pop() && arr.push('FizzBuzz')
        }
    }
    console.log(arr);
    return arr;
}
fizzBuzzArray(20);

module.exports = fizzBuzzArray;
