class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney,
            this.menu = {},
            this.stockProducts = {},
            this.history = []
    }

    loadProducts(products) {
        //let result = [];

        products.forEach(line => {
            let [name, qty, totalPrice] = line.split(' ');
            qty = Number(qty);
            totalPrice = Number(totalPrice);

            if (totalPrice <= this.budgetMoney) {
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = qty;
                } else {
                    this.stockProducts[name] += qty;
                }
                this.budgetMoney -= totalPrice;

                this.history.push(`Successfully loaded ${qty} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${qty} ${name}`);
            }
        });

        return  this.history.join('\n');
    }

    addToMenu(meal, needed, price) {
        let result = '';

        let curentProducts = {};

        for (const line of needed) {
            let neededProducts = line.split(' ');
            let prodctName = neededProducts[0];
            let productQty = Number(neededProducts[1]);
            curentProducts[prodctName] = productQty;
        }


        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: curentProducts, price: price };
            if (Object.keys(this.menu).length == 1) {
                result = `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                result = `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }

        } else {
            result = `The ${meal} is already in the our menu, try something different.`;
        }

        return result;
    }

    showTheMenu() {
        let result = [];

        if (Object.keys(this.menu).length < 1) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            Object.keys(this.menu).forEach(x => {
                result.push(`${x} - $ ${this.menu[x].price}`)
            })
            return result.join('\n')
        }
    }

    makeTheOrder(searchedMeal) {
        if (!this.menu.hasOwnProperty(searchedMeal)) {
            return `There is not ${searchedMeal} yet in our menu, do you want to order something else?`
        } else {
            for (const element of Object.keys(this.menu[searchedMeal].products)) {
                if (!this.stockProducts.hasOwnProperty(element)) {
                    return `For the time being, we cannot complete your order (${searchedMeal}), we are very sorry...`
                } else if (this.menu[searchedMeal].products[element] > this.stockProducts[element]) {
                    return `For the time being, we cannot complete your order (${searchedMeal}), we are very sorry...`
                }
            }

            for (const element of Object.keys(this.menu[searchedMeal].products)) {
                this.stockProducts[element] -= this.menu[searchedMeal].products[element];
            }

            this.budgetMoney += this.menu[searchedMeal].price;

            return `Your order (${searchedMeal}) will be completed in the next 30 minutes and will cost you ${this.menu[searchedMeal].price}.`

        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));



