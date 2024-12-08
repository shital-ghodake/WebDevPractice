// function primeNo(n){
// if(n<=1)
//     console.log(+n"no is prime");
// else
//     console.log("no is not prime");
// }
// primeNo(3)


function primeNo(num) {
    if (num === 2) {
        return `${num} is a prime number.`;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} is not a prime number.`;
        }
    }
    return `${num} is a prime number.`;
}

// Test the function
const number = 100; // You can change this number to test other cases

res = primeNo(number)
console.log(res);