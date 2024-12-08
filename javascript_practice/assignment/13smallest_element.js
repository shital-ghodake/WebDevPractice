arr = [12,76,43,66,38]



function smallestArray(num){
    min = arr[0]
    for(i=0; i<arr.length; i++){
        if (arr[i]<min){
            min =arr[i]
        }
    
    }
    return min
}

