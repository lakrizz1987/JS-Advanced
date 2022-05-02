function rotate(arr, number) {

    for (let i = 0; i < number; i++){
        let curent = arr.pop();
        arr.unshift(curent);
    }

    console.log(arr.join(' '));
}

rotate(['1',
    '2',
    '3',
    '4'],
    2
)