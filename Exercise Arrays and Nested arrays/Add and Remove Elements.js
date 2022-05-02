function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        command == 'add' ? result.push(i + 1) : result.pop()
    }

    if (result.length < 1) {
        console.log('Empty');
    } else {
        result.forEach(x => console.log(x));
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']

)