arr = [12,76,43,66,38]



function maxArray(num){
    max = arr[0]
    for(i=0; i<arr.length; i++){
        if (arr[i]>max){
            max =arr[i]
        }
    
    }
    return max
}

