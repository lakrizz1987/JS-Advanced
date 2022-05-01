function solve(n, k) {
    let arr = [1];

    while (arr.length < n) {
        let curent = arr.slice(-k);
        let sum = curent.reduce((a, b) => a + b);
        arr.push(sum);
    }

    return arr;
}

solve(6, 3)