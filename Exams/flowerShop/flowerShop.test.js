let flowerShop = require('./flowerShop');
let { assert, expect } = require('chai');

describe('Testing flowerShop functions',()=>{
    //Testing calcPriceOfFlowers 
    it('calcPriceOfFlowers should trow Error if fparam is number not string',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers(2,2,2) }, Error);
    })
    it('calcPriceOfFlowers should trow Error if fparam is arr not string',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers([2],2,2) }, Error);
    })
    it('calcPriceOfFlowers should trow Error if fparam is obj not string',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers({name:'Pesho'},2,2) }, Error);
    })

    it('calcPriceOfFlowers should trow Error if Sparam is str not number',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('Ivo','2',2) }, Error);
    })
    it('calcPriceOfFlowers should trow Error if Sparam is arr not number',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('Ivo',[1],2) }, Error);
    })
    it('calcPriceOfFlowers should trow Error if Sparam is empty str not number',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('Ivo','',2) }, Error);
    })

    it('calcPriceOfFlowers should trow Error if Tparam is str not number',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('Ivo',2,'2') }, Error);
    })
    it('calcPriceOfFlowers should trow Error if Tparam is arr not number',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('Ivo',2,[2]) }, Error);
    })
    it('calcPriceOfFlowers should trow Error if Tparam is empty str not number',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('Ivo',2,'') }, Error);
    })
    

    it('calcPriceOfFlowers should trow Error if all param are wrong',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers(2,'2','') }, Error);
    })
    it('calcPriceOfFlowers should trow Error if all param are wrong',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers('','','') }, Error);
    })
    it('calcPriceOfFlowers should trow Error if all param are wrong',() => {
        assert.throws(() => { flowerShop.calcPriceOfFlowers(['ivo'],'3','4') }, Error);
    })

    it('calcPriceOfFlowers should return right result if all params are ok',()=>{
        expect(flowerShop.calcPriceOfFlowers('Rosa',10,2)).to.equal(`You need $20.00 to buy Rosa!`)
    })

    // Testing checkFlowersAvailable
    it('checkFlowersAvailable should return available if flower is in array ',()=>{
        expect(flowerShop.checkFlowersAvailable('Rose',["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`)
    })
    it('checkFlowersAvailable should return purchaise more if flower is not in array ',()=>{
        expect(flowerShop.checkFlowersAvailable('Tulip',["Rose", "Lily", "Orchid"])).to.equal(`The Tulip are sold! You need to purchase more!`)
    })

    //Testing sellFlowers
    it('sellFlowers should trow Error first param is obj not string',() => {
        assert.throws(() => { flowerShop.sellFlowers({},2) }, Error);
    })
    it('sellFlowers should trow Error first param is num not string',() => {
        assert.throws(() => { flowerShop.sellFlowers(2,2) }, Error);
    })
    it('sellFlowers should trow Error second param is str not num',() => {
        assert.throws(() => { flowerShop.sellFlowers(['ivo','pesho','koko'],'2') }, Error);
    })
    it('sellFlowers should trow Error second param is arr not num',() => {
        assert.throws(() => { flowerShop.sellFlowers(['ivo','pesho','koko'],['2']) }, Error);
    })
    it('sellFlowers should trow Error second param is bigger than arr length ',() => {
        assert.throws(() => { flowerShop.sellFlowers(['ivo','pesho','koko'],5) }, Error);
    })
    it('sellFlowers should trow Error second param is equal to arr length ',() => {
        assert.throws(() => { flowerShop.sellFlowers(['ivo','pesho','koko'],3) }, Error);
    })
    it('sellFlowers should trow Error second param is negative ',() => {
        assert.throws(() => { flowerShop.sellFlowers(['ivo','pesho','koko'],-5) }, Error);
    })

    it('sellFlowers should return result whith right params ',()=>{
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).to.equal(`Rose / Orchid`)
    })

    it('sellFlowers should return result whith right params ',()=>{
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Lily"],2)).to.equal('Rose / Lily / Lily')
    })
})