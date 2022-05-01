function solve(arr) {
    let coutn = Math.round(arr.length / 2);
    let result = arr.sort((a, b) => a - b).splice(-coutn);

    return result;
}

solve([4, 7, 2, 5])