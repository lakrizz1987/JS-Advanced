function solve(input){
    let regEx = /[A-Za-z0-9]+/g

    let arr = input.match(regEx);
    console.log(arr.join(', ').toUpperCase())
}

solve('hello')