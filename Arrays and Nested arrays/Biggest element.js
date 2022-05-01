function solve(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;

    matrix.forEach(arr => {
        arr.forEach(num => {
            if (num > biggest) {
                biggest = num;
            }
        });
    });

    console.log(biggest);
}

solve([[20, 50, 10],
[8, 33, 145]])