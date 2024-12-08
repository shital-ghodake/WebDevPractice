var num=567
var sum=0
/*function sumOfThreeDigit(num){
    sum=0
    num=num.toString();
    for(let char of num){
        // console.log(char)
        // console.log(typeof char)
        sum = sum + parseInt(char)
        // console.log(sum)
    }

    return sum
    // converting to string


}

console.log(typeof num)
let res = sumOfThreeDigit(num)
console.log(res)*/
num=num.toString()
var lenOfString = num.length
for(let i=0;i<lenOfString; i++){
    convrtedInt = parseInt(num[i], 10)
    console.log(convrtedInt)

    sum=sum+convrtedInt
}
console.log(sum)