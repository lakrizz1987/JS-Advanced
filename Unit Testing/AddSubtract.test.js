let createCalculator = require('./AddSubtract');
let { expect } = require('chai');

describe('Testing createCalculator', () => {
    it('Test if result is obj whit functions',()=>{
        let calc = createCalculator();
        
        expect(typeof calc == 'object').to.equal(true);
    });

    

    it('Test outside value manipulation',()=>{
        let calc = createCalculator();
        calc.add(5);
        let newValue = calc.get() + 1;

        expect(calc.get()).to.equal(5)
    });

    it('Test subtract function',()=>{
        let calc = createCalculator();
        calc.subtract(2);
        calc.subtract(2);

        expect(calc.get()).to.equal(-4)
    })

    it('Test add function',()=>{
        let calc = createCalculator();
        calc.add(2);
        calc.add(2);

        expect(calc.get()).to.equal(4)
    })

    it('Test get function',()=>{
        let calc = createCalculator();
        

        expect(calc.get()).to.equal(0)
    })

    it('Test add function whith string',()=>{
        let calc = createCalculator();
        calc.add('asd');
        

        expect(calc.get()==NaN).to.equal(false)
    })

    it('Test subtr function whith string',()=>{
        let calc = createCalculator();
        calc.subtract('asd');
        

        expect(calc.get()==NaN).to.equal(false)
    })

    it("should return 4.2 after add(5.3); subtract(1.1);", function () {
        let calc = createCalculator();
        calc.add(5.3);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.equal(5.3 - 1.1);
    });

    it("should return NanN for subtarct(string)", function () {
        let calc = createCalculator();
        calc.subtract('hello');
        let value = calc.get();
        expect(value).to.be.NaN;
    });

    it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        let value = calc.get();
        expect(value).to.be.equal(2);
    });
})
