//defining function
function greet(){
    console.log("Welcome to function in js")
    console.log("Good morning")
    console.log("Good Day")
    console.log("Good World")
}

//calling function
greet()
greet()
greet()

//defining fuction with parameter
function add(a,b){
    var c=a+b;
    console.log("addition is", c)
}
add(10,20)
add(27,45)
add(-234, 200)
add(2.8,5.3)

// defining function with paraneter and return result
function calculateInterest(p,n,r){
    var interest = (p*n*r)/100;
    return interest; // function returning result
}
var interestAmount = calculateInterest(10000.00,4.5,7.75)
console.log("interest calculate is " + interestAmount)


interestAmount=calculateInterest(350000.00,8.9,6.50)
console.log("Interest Calculated is " + interestAmount)