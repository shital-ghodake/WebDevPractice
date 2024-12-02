/*let numd;
numd = 10
console.log(numd)




let numOne = 5;
numTwo = numOne;
console.log(numTwo);

//const test1 = 3;
//test1 = 4;
//console.log(test1)


let test = 5;
test = 9;
console.log(test)

//const num;
//num = 6;
//console.log(num);*/

//const num = 2;
//num = 6;
//console.log(num);


//const text = hello;  // "hello" is correct
//console.log(text);
//ReferenceError: hello is not defined

const num4 = 5;
console.log(num4);

//space between two string using +" "+ 

const textOne = 'Hello';
const textTwo = 'World';
const combined =  textOne +" "+textTwo ;
console.log(combined);

let temperature = 75;
console.log(`The temperature is ${temperature}`);
 
if (temperature > 70) {
   console.log("It's warm outside");
}
//The temperature is 75
//It's warm outside

let text = 'hello';
if (text === 'hello') {
   text = text + ' world';
}
console.log(text === 'hello world');

//function
//Let's create and use our first function:
function logMessage() {
  console.log('Hello world!');
}
 logMessage();

 //another way to create function
 const logMessageTwo = function() {
    console.log('Great, thanks!');
  }


//One more thing that you should know about functions is that they return values. You can return a value by using the return keyword.
function func() {
  return 5;
}
 
const result = func();
 
console.log(result);

//Note that the execution of a function stops immediately when it reaches a return statement. All code after the return statement is ignored.
function func() {
  return 5;
  console.log("I will not be logged.");
}
 
const result = func();    //output is 5
 
console.log(result);