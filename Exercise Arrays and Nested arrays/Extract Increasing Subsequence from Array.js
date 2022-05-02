function solve(arr) {
    let result = [arr.shift()];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= result[result.length-1]){
            result.push(arr[i])
        }
    }

    return result;
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
)