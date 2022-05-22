const isOddOrEven = require('./EvenOrOdd');
const {assert,expect} = require('chai');

describe('Test isOddOrEven function',()=>{
    it('Should return undefined if parametar is not string',()=>{
        assert.equal(isOddOrEven([1.2]), undefined)
    })

    it('Should return even if parametar is string',()=>{
        assert.equal(isOddOrEven('Vito'), 'even')
    })

    it('Should return odd if parametar is string',()=>{
        assert.equal(isOddOrEven('Ivo'), 'odd')
    })
})