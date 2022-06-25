let carService = require('./03. Car service_Resources');
let { assert, expect } = require('chai');

describe('Test testNumbers functionality', () => {
    //isItExpensive
    it('Test isItExpensive with Engine for argument', () => {
        expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
    })
    it('Test isItExpensive with Transmission for argument', () => {
        expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
    })

    it('Test isItExpensive with other parts for argument', () => {
        expect(carService.isItExpensive('Pump')).to.equal(`The overall price will be a bit cheaper`);
    })


    //discount 
    it('Test discount  shold throw error whith string for first arg', () => {
        assert.throws(() => { carService.discount('4', 20) }, Error);
    });
    it('Test discount  shold throw error whith string for second arg', () => {
        assert.throws(() => { carService.discount(20, '300') }, Error);
    });
    it('Test discount  shold throw error whith string for both arg', () => {
        assert.throws(() => { carService.discount('20', '300') }, Error);
    });

    it('Test discount with one part should return no discount', () => {
        expect(carService.discount(1, 10)).to.equal("You cannot apply a discount");
    })
    it('Test discount with two part should return no discount', () => {
        expect(carService.discount(2, 10)).to.equal("You cannot apply a discount");
    })
    it('Test discount with 0 part should return no discount', () => {
        expect(carService.discount(0, 10)).to.equal("You cannot apply a discount");
    })
    it('Test discount with -2 part should return no discount', () => {
        expect(carService.discount(-2, 10)).to.equal("You cannot apply a discount");
    })

    it('Test discount with 3 part should return the discount sum', () => {
        let sum = 100
        let parts = 3;
        let discount = 0;
        if (parts > 2 && parts <= 7) {
            discount = 15
        } else if (parts > 7) {
            discount = 30
        }

        let total = sum * discount / 100;

        expect(carService.discount(parts, sum)).to.equal(`Discount applied! You saved ${total}$`);
    })

    it('Test discount with 7 part should return the discount sum', () => {
        let sum = 100
        let parts = 7;
        let discount = 0;
        if (parts > 2 && parts <= 7) {
            discount = 15
        } else if (parts > 7) {
            discount = 30
        }

        let total = sum * discount / 100;

        expect(carService.discount(parts, sum)).to.equal(`Discount applied! You saved ${total}$`);
    })

    it('Test discount with 10 part should return the discount sum', () => {
        let sum = 100
        let parts = 10;
        let discount = 0;
        if (parts > 2 && parts <= 7) {
            discount = 15
        } else if (parts > 7) {
            discount = 30
        }

        let total = sum * discount / 100;

        expect(carService.discount(parts, sum)).to.equal(`Discount applied! You saved ${total}$`);
    })


    //partsToBuy
    it('Test partsToBuy  shold throw error whith no arr for first arg', () => {
        assert.throws(() => { carService.partsToBuy(20, ['ivo', 'pesho']) }, Error);
    });
    it('Test partsToBuy  shold throw error whith no arr for second arg', () => {
        assert.throws(() => { carService.partsToBuy(['ivo', 'pesho'],{name:'Part'}) }, Error);
    });
    it('Test partsToBuy  shold throw error whith no arr for both arg', () => {
        assert.throws(() => { carService.partsToBuy(2,{name:'Part'}) }, Error);
    });


    it('Test partsToBuy to return 0 fo empty first arr', () => {
        expect(carService.partsToBuy([],['aspuh','voaln'])).to.equal(0);
    })

    it('Test partsToBuy to return sum of parts if all parts are available', () => {
        expect(carService.partsToBuy([{ part: "volan", price: 150 },{ part: "aspuh", price: 300 }],['aspuh','volan'])).to.equal(450);
    })

    it('Test partsToBuy to return sum of parts if no all parts are available', () => {
        expect(carService.partsToBuy([{ part: "volan", price: 150 },{ part: "aspuh", price: 300 }],['aspuh','volan','radiator'])).to.equal(450);
    })

})