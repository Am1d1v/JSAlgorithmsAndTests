

// function sumUpTo(num) {

//     if(num === 1){
//         return 1;
//     }

//     return num + sumUpTo(num - 1);

// }


    // Last In First Out
function sumUpTo(num) {

    if(num === 1){
        console.log(`sumUpTo(${num}) return 1`);
        return 1;
    }

    console.log(`sumUpTo(${num}) calls sumUpTo(${num - 1}) + ${num}`);

    const res = num + sumUpTo(num - 1);
    console.log(`sumUpTo(${num}) returns ${res}`);

    return res;
}

console.log(sumUpTo(3));

module.exports = sumUpTo;
