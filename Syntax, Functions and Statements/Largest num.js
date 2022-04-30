function solve(a, b, c) {
    let bigest = 0;

    if (a > b && a > c) {
        bigest = a;
    }else if (b > a && b > c){
        bigest = b;
    }else {
        bigest = c;
    }

    console.log(`The largest number is ${bigest}.`)
}

solve(-3,5,16)