function solution() {

    function restock(curentProduct, curentQty) {
        storage[curentProduct] += curentQty;
        let output = 'Success';
        return output
    }

    function prepare(curentProduct, curentQty) {
        let output = ''
        let isNotEnought = false
        let objNeed = new Map();
        let falseProduct = [];
        Object.entries(receipts[curentProduct]).forEach(arr => {
            objNeed.set(arr[0], arr[1] * curentQty)

        });

        for (const key of objNeed) {

            if (storage[key[0]] < key[1]) {
                falseProduct.push(key[0]);
                isNotEnought = true;
                break;
            }
        }

        if (isNotEnought) {
            output = `Error: not enough ${falseProduct[0]} in stock`;
        } else {
            output = 'Success';
            for (const key of objNeed) {
                storage[key[0]] -= receipts[curentProduct][key[0]]*curentQty;
            }
        }

        return output;
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let receipts = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }



    function commands(params) {

        let array = params.split(' ');

        let command = array.shift();
        let curentProduct = ''
        let curentQty = ''
        if (command != 'report') {
            curentProduct = array.shift();
            curentQty = Number(array.shift());
        }

        if (command == 'restock') {

            return restock(curentProduct, curentQty);


        } else if (command == 'prepare') {
            return prepare(curentProduct, curentQty);

        } else if (command == 'report') {

            return report();
        }
    }

    return commands;

}

let manager = solution();


console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));