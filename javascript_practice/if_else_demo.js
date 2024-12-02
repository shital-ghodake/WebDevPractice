var a = 1000, b = 2000;
if(a>b){
    console.log("maximum is ", a)
    console.log("Hello if")
}
else{
    console.log("maximum is ", b)
    console.log("Hello else part")
}

var x = 2, y = 5, z = 3;
if(x>y && x>z)
    console.log("X is maximum:",x)
else if(y>z)
    console.log("y is maximum:",y)
else
    console.log("z is maximum:",z)

    if(x<y || x<z){
        console.log("x is smaller: ",x)
    }else if(y<z)
        console.log("y is smaller: ",y)
    else
        console.log("z is smaller: ",z)

    /**
     * Truth table of logical AND (&&)
     * condition1 &&   condition2    Result
     *    true            true        true
     *    true            false      false
     *    false           true       false (SC-Shot Circuit)
     *    false           false      false (SC-Shot Circuit)
     * 
     * Truth table of LOgical OR (||)
     * condition1 &&   condition2    Result
     *    true            true        true (SC-Shot Circuit)
     *    true            false       true (SC-Shot Circuit)
     *    false           true        true
     *    false           false      false
     */