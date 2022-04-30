function solve(input) {

    function sum(arr) {
        return arr.reduce((a, b) => a + b);
    }

    function inverseSum(arr) {
        let result = 0;

        arr.forEach(element => {
            result += (1 / element);
        });

        return result;
    }

    function concat(arr) {
        let result = '';
        arr.forEach(x=>result+= x.toString())
        return result;
    }

    console.log(sum(input));
    console.log(inverseSum(input));
    console.log(concat(input));
}

solve([2, 4, 8, 16])