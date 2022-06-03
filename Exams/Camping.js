class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        let objPerson = this.listOfParticipants.find(x => x.name == name);

        if (objPerson) {
            return `The ${name} is already registered at the camp.`;

        } else {
            if (money < this.priceForTheCamp[condition]) {
                return `The money is not enough to pay the stay at the camp.`;
            } else {
                this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
                return `The ${name} was successfully registered.`
            }
        }
    };

    unregisterParticipant(name) {
        let objPerson = this.listOfParticipants.find(x => x.name == name);

        if (!objPerson) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            this.listOfParticipants.splice(this.listOfParticipants.indexOf(objPerson), 1);
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            let person1 = this.listOfParticipants.find(x => x.name == participant1);
            let person2 = this.listOfParticipants.find(x => x.name == participant2);
            if (!person1 || !person2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (person1.condition != person2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (person1.power > person2.power) {
                person1.wins++;
                return `The ${person1.name} is winner in the game ${typeOfGame}.`
            } else if (person2.power > person1.power) {
                person2.wins++;
                return `The ${person2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }

        } else if (typeOfGame == 'Battleship') {
            let person1 = this.listOfParticipants.find(x => x.name == participant1);
            if (!person1) {
                throw new Error(`Invalid entered name/s.`);
            } else {
                person1.power += 20;
                return `The ${person1.name} successfully completed the game ${typeOfGame}.`;
            }

        }
    };

    toString(){
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        this.listOfParticipants.sort((a,b)=>b.wins - a.wins).forEach(x=>result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`));
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());