function lowPrice(input) {
    let [town, product, price] = input.shift().split(' | ');
    price = Number(price);
    let result = [{ town, product, price }];

    for (let line of input) {
        let isInResult = false;
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        let obj = { town, product, price };

        result.forEach(x => {
            if (x.product === obj.product) {
                isInResult = true;
                if (x.price > obj.price) {
                    x.price = obj.price;
                    x.town = obj.town;

                }
            }
        });

        if (isInResult == false) {
            result.push(obj);
        }

    }

    result.forEach(el => console.log(`${el.product} -> ${el.price} (${el.town})`));
}

lowPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)