function solve(arr) {
    let sum = arr.map(x => Number(x)).filter((x, i) => i == 0 || i == arr.length - 1).reduce((a, b) => a + b);
    console.log(sum);

}

solve(['20'])