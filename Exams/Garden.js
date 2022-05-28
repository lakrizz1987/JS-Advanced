class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.')
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`

        }
    }

    ripenPlant(plantName, quantity) {
        if (!this.plants.find(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (this.plants.find(x => x.plantName == plantName && x.ripe != false)) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (this.plants.find(x => x.plantName == plantName && x.ripe == false) && quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        let curentPlant = this.plants.find(x => x.plantName == plantName);
        curentPlant.ripe = true;
        curentPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {
        if (!this.plants.find(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (this.plants.find(x => x.plantName == plantName && x.ripe == false)) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let curentPlantIndex = this.plants.findIndex(x => x.plantName == plantName);
        let objPlant = this.plants.splice(curentPlantIndex, 1)[0];
        let name = objPlant.plantName;
        let qty = objPlant.quantity;
        this.storage.push({ plantName: name, quantity: qty });
        this.spaceAvailable += objPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let output = '';
        output += `The garden has ${this.spaceAvailable} free space left.\n`

        let names = [];
        this.plants.forEach(x => names.push(x.plantName));
        let sortedNames = names.sort((a, b) => a.localeCompare(b))
        output += `Plants in the garden: ${sortedNames.join(', ')}\n`

        if (this.storage.length == 0) {
            output += "Plants in storage: The storage is empty."
        } else {
            let arr = []
            this.storage.forEach(x => arr.push(`${x.plantName} (${x.quantity})`));
            output += `Plants in storage: ${arr.join(', ')}`;
        }

        return output;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
