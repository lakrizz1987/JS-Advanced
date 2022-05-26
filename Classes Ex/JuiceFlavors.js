function solve(arr) {
    let result = new Map();

    arr.reduce((a, curr) => {
        let [name, qty] = curr.split(' => ');
        qty = Number(qty);

        if (!a.hasOwnProperty(name)) {
            a[name] = 0;
        }
        a[name] += qty;

        if (a[name] >= 1000) {
            if (!result.has(name)) {
                result.set(name, 0)
            }
            result.set(name, result.get(name) + parseInt(a[name] / 1000));
            a[name] %= 1000;
        }


        return a;
    }, {})

    for (const line of result) {
        console.log(`${line[0]} => ${line[1]}`)
    }
}
solve(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])