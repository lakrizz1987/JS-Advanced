function solve(matrix) {
    let MainDiagonal = [];
    let SecondaryDiagonal = [];
    let result = [];

    while (MainDiagonal.length < matrix.length) {
        for (let i = 0; i < matrix.length; i++) {
            MainDiagonal.push(Number(matrix[i][i]));

        }
    }

    while (SecondaryDiagonal.length < matrix.length) {
        for (let i = 0; i < matrix.length; i++) {
            SecondaryDiagonal.push(Number(matrix[i][matrix.length - 1 - i]))
        }
    }

    result.push(MainDiagonal.reduce((a, b) => a + b));
    result.push(SecondaryDiagonal.reduce((a, b) => a + b));


    console.log(result.join(' '))
}

solve([[20, 40],
    [10, 60]]
   

)