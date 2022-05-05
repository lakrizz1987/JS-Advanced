function catalogue(input) {
    let sortedArr = input.sort((a, b) => a.localeCompare(b));
    let letter = '';

    for (line of sortedArr) {
        let [product, price] = line.split(' : ');
        if (letter != product[0]) {
            letter = product[0];
            console.log(letter);
        }
        console.log(`  ${product}: ${price}`)
    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)