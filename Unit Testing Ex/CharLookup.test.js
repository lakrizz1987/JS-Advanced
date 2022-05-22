const lookupChar = require('./CharLookup');
const { assert, expect } = require('chai');

describe('Test lookupChar function', () => {
    it('1.Should return undefined if first param is num not string',()=>{
        assert.equal(lookupChar(1,1),undefined);
    })

    it('2.Should return undefined if first param is arr not string',()=>{
        assert.equal(lookupChar([1],1),undefined);
    })

    it('3.Should return undefined if second param is string not number',()=>{
        assert.equal(lookupChar('hello','1'),undefined);
    })

    it('4.Should return undefined if second param is array not number',()=>{
        assert.equal(lookupChar('hello',[1]),undefined);
    })

    it('5.Should return "Incorrect index" if index is bigger than str.length-1',()=>{
        assert.equal(lookupChar('ivo',8),"Incorrect index")
    })

    it('6.Should return "Incorrect index" if index is negative number',()=>{
        assert.equal(lookupChar('ivo',-8),"Incorrect index")
    })

    it('7.Should return char if two params are valid',()=>{
        assert.equal(lookupChar('ivo',1),"v")
    })

    it('8.Should return char if two params are valid',()=>{
        assert.equal(lookupChar('i',0),"i")
    })

    it('9.Should return "Incorrect index" if first param is "" ',()=>{
        assert.equal(lookupChar('',0),"Incorrect index");
    })

    it('10.Should return undefined if second param is 10.5 not number',()=>{
        assert.equal(lookupChar('hello',10.5),undefined);
    })
})