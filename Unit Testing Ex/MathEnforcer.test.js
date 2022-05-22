const { assert, expect } = require('chai');
const mathEnforcer = require('./MathEnforcer');

describe('Test object functions',()=>{
    //addFive()
    it('1.Should return undefined if parametar is not number',()=>{
        assert.equal(mathEnforcer.addFive('ivo'),undefined)
    })
    it('2.Should return undefined if parametar is not number',()=>{
        assert.equal(mathEnforcer.addFive([2]),undefined)
    })
    it('3.Should return undefined if parametar is not number',()=>{
        assert.equal(mathEnforcer.addFive(''),undefined)
    })
    it('4.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.addFive(5),10)
    })
    it('--.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.addFive(1.1),6.1)
    })
    it('---.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.addFive(-4),1)
    })
    //subtractTen() 
    it('5.Should return undefined if parametar is not number',()=>{
        assert.equal(mathEnforcer.subtractTen('ivo'),undefined)
    })
    it('6.Should return undefined if parametar is not number',()=>{
        assert.equal(mathEnforcer.subtractTen([2]),undefined)
    })
    it('7.Should return undefined if parametar is not number',()=>{
        assert.equal(mathEnforcer.subtractTen(''),undefined)
    })
    it('8.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.subtractTen(15),5)
    })
    it('--.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.subtractTen(15.1),5.1)
    })
    it('---.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.subtractTen(0),-10)
    })
    it('----.Should return right num if parametar is number',()=>{
        assert.equal(mathEnforcer.subtractTen(-15),-25)
    })
    //sum()
    it('9.Should return undefined if first parametar is not number',()=>{
        assert.equal(mathEnforcer.sum([2],2),undefined)
    })
    it('10.Should return undefined if first parametar is not number',()=>{
        assert.equal(mathEnforcer.sum('ivo',2),undefined)
    })
    it('11.Should return undefined if second parametar is not number',()=>{
        assert.equal(mathEnforcer.sum(2,[2]),undefined)
    })
    it('12.Should return undefined if second parametar is not number',()=>{
        assert.equal(mathEnforcer.sum(2,'aaa'),undefined)
    })
    it('13.Should return sum if both parametars are number',()=>{
        assert.equal(mathEnforcer.sum(2,2),4)
    })
    it('14.Should return sum if both parametars are number',()=>{
        assert.equal(mathEnforcer.sum(2.2,2.2),4.4)
    })
    it('15.Should return sum if both parametars are number',()=>{
        assert.equal(mathEnforcer.sum(-2,-3),-5)
    })
})