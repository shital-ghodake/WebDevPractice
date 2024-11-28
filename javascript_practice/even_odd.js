// Program to generate a multiplication table for a given number
let number = prompt("Enter a number to generate its multiplication table:");
number = parseInt(number);

let result = "Multiplication Table of " + number + ":\n";
for (let i = 1; i <= 10; i++) {
  result += `${number} x ${i} = ${number * i}\n`;
}
alert(result);
