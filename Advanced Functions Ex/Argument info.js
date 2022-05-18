function solve(...info) {
    let result = {};

    info.forEach(el => {
        let type = typeof el
        console.log(`${type}: ${el}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type]++;
    });

    Object.entries(result).sort((a,b)=>b[1]-a[1]).map(row => console.log(`${row[0]} = ${row[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); })