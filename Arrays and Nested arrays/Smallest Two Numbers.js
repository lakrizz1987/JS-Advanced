function solve(arr) {
    let result = [];

    while (result.length < 2) {
        let min = Math.min(...arr);
        result.push(min);
        let index = arr.indexOf(min);
        arr.splice(index, 1);
    }

    console.log(result.join(' '));
}

solve([30, 15, 50, 5])