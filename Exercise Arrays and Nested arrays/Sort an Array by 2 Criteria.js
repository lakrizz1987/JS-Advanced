function solve(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(element => {
        console.log(element)
    });
}
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

)