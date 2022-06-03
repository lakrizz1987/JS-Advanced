class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let UniqueProducts = new Set;

        vegetables.forEach(line => {
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            UniqueProducts.add(type);

            let productObj = this.availableProducts.filter(x => x.type == type);

            if (productObj.length > 0) {
                productObj[0].quantity += quantity;
                if (price > productObj[0].price) {
                    productObj[0].price = price;
                }

            } else {
                this.availableProducts.push({ type, quantity, price });
            }

        });

        return `Successfully added ${Array.from(UniqueProducts).join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(line => {
            let [type, quantity] = line.split(' ');
            quantity = Number(quantity);

            let productObj = this.availableProducts.filter(x => x.type == type);

            if (!productObj[0]) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            } else {
                if (quantity > productObj[0].quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }

                totalPrice += productObj[0].price * quantity;
                productObj[0].quantity -= quantity;
            }
        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let productObj = this.availableProducts.find(x => x.type == type);

        if (!productObj) {
            throw new Error(`${type} is not available in the store.`);

        } else {
            if (quantity > productObj.quantity) {
                productObj.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                productObj.quantity -= quantity;

                return `Some quantity of the ${type} has been removed.`;
            }
        }
    }

    revision() {
        let result = ["Available vegetables:"];

        this.availableProducts.sort((a, b) => a.price - b.price)
            .forEach(product => result.push(`${product.type}-${product.quantity}-$${product.price}`));
            
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());





