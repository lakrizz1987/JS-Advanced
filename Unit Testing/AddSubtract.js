function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let a = createCalculator()
a.add('asd')
console.log(a.get())
module.exports = createCalculator;