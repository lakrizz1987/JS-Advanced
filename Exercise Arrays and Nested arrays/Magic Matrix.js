function solve(matrix) {
    let sumToCheck = matrix[0].reduce((a, b) => a + b);

    matrix.forEach(arr => {
        let sumOfArr = arr.reduce((a, b) => a + b);
        if (sumOfArr != sumToCheck) {
            return false;
        }
    });

    for (let i = 0; i < matrix.length; i++) {
        let sumColumn = 0;
        for (let j = 0; j < matrix.length; j++){
            sumColumn += matrix[j][i];
        }

        if(sumColumn != sumToCheck){
            return false;
        }
    }

    return true;
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)