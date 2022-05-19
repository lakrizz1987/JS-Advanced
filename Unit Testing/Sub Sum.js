function sum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    };

    let startIntex = Math.max(start, 0);
    let endIndex = Math.min(end, arr.length - 1);

    return arr.map(Number).splice(startIntex, endIndex - startIntex + 1).reduce((a, b) => {
        return a += b;
    }, 0)

}

console.log(sum('text', 0, 2))