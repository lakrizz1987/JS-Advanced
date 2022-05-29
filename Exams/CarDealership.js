class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let curentCarObj = this.availableCars.find(x => x.model == model);

        if (!curentCarObj) {
            throw new Error(`${model} was not found!`)
        }

        let index = this.availableCars.indexOf(curentCarObj);
        let soldPrice = 0;
        if (desiredMileage < curentCarObj.mileage) {
            let difference = curentCarObj.mileage - desiredMileage;

            if (difference <= 40000) {
                soldPrice = curentCarObj.price * 0.95
            } else {
                soldPrice = curentCarObj.price * 0.90
            }

        } else {
            soldPrice = curentCarObj.price;
        }

        this.soldCars.push({ model: curentCarObj.model, horsepower: curentCarObj.horsepower, soldPrice: soldPrice });
        this.totalIncome += soldPrice;
        this.availableCars.splice(index, 1);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        let output = [];

        if (this.availableCars == 0) {
            return `There are no available cars`
        } else {
            output.push(`-Available cars:`) 
            this.availableCars.forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
            return output.join('\n');
        }
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error("Invalid criteria!");
        }
        let sorted = '';
        let output = [];
        if (criteria == 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else {
            sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }

        output.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`) 
        output.push(`-${this.soldCars.length} cars sold:`)
        sorted.forEach(x => output.push(`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`))
        return output.join('\n');
    }
}


let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'))

