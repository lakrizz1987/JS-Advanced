function solve(input) {
    let array = input.filter((x, a) => a % 2 == 0);
    console.log(array.join(' '));
}

solve(['5', '10'])