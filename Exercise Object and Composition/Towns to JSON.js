function townsJSON(input) {
    let arrayNames = input.shift().split('|').filter(x => x != '').map(x => x.trim());
    let result = [];

    input.forEach(line => {
        let [curentTown, curentLatitude, curentLongitude] = line.split('|').filter(x => x != '').map(x => x.trim());

        let obj = {
            [arrayNames[0]]: curentTown,
            [arrayNames[1]]: Number(Number(curentLatitude).toFixed(2)),
            [arrayNames[2]]: Number(Number(curentLongitude).toFixed(2))
        }
        result.push(obj);
    });

    console.log(JSON.stringify(result));
}

townsJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)