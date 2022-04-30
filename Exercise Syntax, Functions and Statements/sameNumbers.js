function sameNumbers(input) {
    let arr = input.toString().split('');
    let newArr = arr.filter(x => x != arr[0]);

    newArr.length < 1 ? console.log('true') : console.log('false');

    let result = arr.reduce((a, b) => {
        a += Number(b);
        return a;
    }, 0);

    console.log(result);
}

sameNumbers(1234)