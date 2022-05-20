let sum = require('./sumNumbers');
let expect = require('chai').expect;

describe('Testing sumFunc',function (){
    it('Testing is sum right',()=>{

        expect(sum([1])).to.equal(1);
    });

    it('Testing is sum right two numbers',()=>{
        expect(sum([1,1])).to.equal(2);
    });

    it('Testing is sum right whith three nums ',()=>{
        expect(sum([2,3,4])).to.equal(9);
    });

})