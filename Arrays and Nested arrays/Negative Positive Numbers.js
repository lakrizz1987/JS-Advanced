function solve(arr) {
    let result = [];

    arr.forEach(element => element < 0 ? result.unshift(element) : result.push(element));
    result.forEach(x => console.log(x));
}

solve([3, -2, 0, -1])