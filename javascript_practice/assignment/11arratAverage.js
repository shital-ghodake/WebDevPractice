function sumOfArray(arr){

    sum=0;
    for(i=0; i<arr.length; i++){
        sum=sum+arr[i]
    }
    return sum
}





arr=[26,4,5, 65]



lenArray = arr.length
// if (lenArray !== 10) {
//     console.log("aary length is not 10, not allowed")
//     return -1

// }


sumArray=sumOfArray(arr)
console.log(sumArray)
avgArray = sum /lenArray
console.log(avgArray)