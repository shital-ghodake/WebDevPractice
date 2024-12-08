function sumOfArray(arr){

    sum=0;
    for(i=0; i<arr.length; i++){
        sum=sum+arr[i]
    }
    return sum
}


arr=[26,4,5]
result=sumOfArray(arr)
console.log(result)