let testNumbers = require('./testNumbers');
let { assert, expect } = require('chai');

describe('Test testNumbers functionality', () => {
    //sumNumber
    it('Test sumNubers with two arguments not a number', () => {
        expect(testNumbers.sumNumbers('a', 'b')).to.equal(undefined)
    });
    it('Test sumNubers with first arguments not a number', () => {
        expect(testNumbers.sumNumbers('1', 1)).to.equal(undefined)
    });
    it('Test sumNubers with second arguments not a number', () => {
        expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined)
    });

    it('Test sumNubers with positive numbers for arguments', () => {
        let sum = 2
        expect(testNumbers.sumNumbers(1, 1)).to.equal(sum.toFixed(2))
    });

    it('Test sumNubers with negative numbers for arguments', () => {
        let sum = -2
        expect(testNumbers.sumNumbers(-1, -1)).to.equal(sum.toFixed(2))
    });

    it('Test sumNubers with one negative number for arguments', () => {
        let sum = 1
        expect(testNumbers.sumNumbers(2, -1)).to.equal(sum.toFixed(2))
    });
    it('Test sumNubers with one negative number for arguments', () => {
        let sum = 1
        expect(testNumbers.sumNumbers(-1, 2)).to.equal(sum.toFixed(2))
    });
    it('Test sumNubers with 0', () => {
        let sum = 0
        expect(testNumbers.sumNumbers(0, 0)).to.equal(sum.toFixed(2))
    });


    //numberChecker
    it('Test numberChecker shold throw error whith string NaN',()=>{
        assert.throws(() => { testNumbers.numberChecker('Pesho') }, Error);
    });
    it('Test numberChecker shold throw error whith arr NaN',()=>{
        assert.throws(() => { testNumbers.numberChecker(['Pesho']) }, Error);
    });
    
    it('Test numberChecker with even number', () => { 
        expect(testNumbers.numberChecker('4')).to.equal("The number is even!")
    });
    it('Test numberChecker with odd number', () => { 
        expect(testNumbers.numberChecker('3')).to.equal("The number is odd!")
    });
    it('Test numberChecker with 0 number', () => { 
        expect(testNumbers.numberChecker('0')).to.equal("The number is even!")
    });
    it('Test numberChecker with even number', () => { 
        expect(testNumbers.numberChecker(14)).to.equal("The number is even!")
    });
    it('Test numberChecker with odd number', () => { 
        expect(testNumbers.numberChecker(13)).to.equal("The number is odd!")
    });

    //averageSumArray
    it('Test averageSumArray sum with 3 nums', () => { 
        expect(testNumbers.averageSumArray([10,20,30])).to.equal(20)
    });
    it('Test averageSumArray sum with 2 nums', () => { 
        expect(testNumbers.averageSumArray([10,20])).to.equal(15)
    });
    it('Test averageSumArray sum with 1 num', () => { 
        expect(testNumbers.averageSumArray([10])).to.equal(10)
    });
    it('Test averageSumArray sum with 1 positive and 1 negative num', () => { 
        expect(testNumbers.averageSumArray([10,-5])).to.equal(2.5)
    });
})
