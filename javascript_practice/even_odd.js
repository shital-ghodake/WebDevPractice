// Program to generate a multiplication table for a given number
/*let number = prompt("Enter a number to generate its multiplication table:");
number = parseInt(number);

let result = "Multiplication Table of " + number + ":\n";
for (let i = 1; i <= 10; i++) {
  result += `${number} x ${i} = ${number * i}\n`;
}
alert(result);*/


//even odd program
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
      return "Even";
  } else {
      return "Odd";
  }
}
console.log(isEvenOrOdd(7)); 
console.log(isEvenOrOdd(10)); 

//addition program
function addition(a,b){
  console.log("Result:",a+b);
}
addition(4,5)

//print 1 to 10 numbers
function number(){
  for(i=1; i<=10; i++){
    console.log("no is:", i);
    }
  }
number();

//skip 4 & 6 no
function continue1(){
  for(i=1; i<=10; i++){
    if(i==4,i==6)
      continue;
    else
      console.log("i:",i)
  }
}
continue1()

//break 5 no
function break1(){
for(i=1; i<=10; i++){
  if(i==6)
    break;
  console.log(i)
}
}
break1()





