


function arraySortDescending(arr){

    // sorting array in desending order uing compare function
    arr.sort(function(e1,e2){
        if(e1>e2)
            return -1
            else if(e1<e2)
                return 1
            else
            return 0
    }  )

    console.log("Array sorting in descending order: ",arr)



}


function arraySortAscending(arr){

    // sorting array in asending order uing compare function
    arr.sort(function(e1,e2){
        if(e1>e2)
            return 1
            else if(e1<e2)
                return -1
            else
            return 0
    }  )

    console.log("Array sorting in ascending order: ",arr)



}


let arr = [40,50,20,30,10,20]
arraySortDescending(arr)


let arrn = [40,50,20,30,10,20]

arraySortAscending(arrn)
