function town(input) {
    let result = {};

    input.forEach(element => {
        let [town, population] = element.split(' <-> ');
        population = Number(population);

        if (result.hasOwnProperty(town)) {
            result[town] += population;
        } else {
            result[town] = population;
        }
    });

    Object.keys(result).forEach(key => console.log(`${key} : ${result[key]}`))
}

town(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)