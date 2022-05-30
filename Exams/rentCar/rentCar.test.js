let rentCar = require('./rentCar');
let {assert,expect} = require('chai');

describe('Test rentCar function',()=>{
    it('Should trow Error if first param is not array',()=>{
        assert.throws(() => { rentCar.searchCar('asd','reno') }, Error);
    })
    it('Should trow Error if first param is not array',()=>{
        assert.throws(() => { rentCar.searchCar({},'reno') }, Error);
    })
    it('Should trow Error if first param is not array',()=>{
        assert.throws(() => { rentCar.searchCar(undefined,'reno') }, Error);
    })
    it('Should trow Error if first param is not array',()=>{
        assert.throws(() => { rentCar.searchCar(0,'reno') }, Error);
    })

    it('Should trow Error if second param is not sring',()=>{
        assert.throws(() => { rentCar.searchCar(['reno','dacia'], 2) }, Error);
    })
    it('Should trow Error if second param is not sring',()=>{
        assert.throws(() => { rentCar.searchCar(['reno','dacia'], '') }, Error);
    })
    it('Should trow Error if second param is not sring',()=>{
        assert.throws(() => { rentCar.searchCar(['reno','dacia'], []) }, Error);
    })
    it('Should trow Error if second param is not sring',()=>{
        assert.throws(() => { rentCar.searchCar(['reno','dacia'], {}) }, Error);
    })

    it('Should trow Error if first and second param is not corect',()=>{
        assert.throws(() => { rentCar.searchCar(2, 2) }, Error);
    })

    it('Should trow Error if no  maching cars',()=>{
        assert.throws(() => { rentCar.searchCar(['reno','dacia'], 'Volvo') }, Error);
    })

    it('should return result ok',()=>{
        expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`)
    })



    it('Should trow Error if no  maching cars',()=>{
        assert.throws(() => { rentCar.calculatePriceOfCar('Volvo', 2) }, Error);
    })
    it('Should trow Error if first param is not cortect',()=>{
        assert.throws(() => { rentCar.calculatePriceOfCar(['reno','dacia'], 2) }, Error);
    })
    it('Should trow Error if first param is not cortect',()=>{
        assert.throws(() => { rentCar.calculatePriceOfCar(2, 2) }, Error);
    })
    it('Should trow Error if first param is not cortect',()=>{
        assert.throws(() => { rentCar.calculatePriceOfCar('', 2) }, Error);
    })
    it('Should trow Error if second param is not cortect',()=>{
        assert.throws(() => { rentCar.calculatePriceOfCar('reno', '2') }, Error);
    })
    it('Should trow Error if second param is not cortect',()=>{
        assert.throws(() => { rentCar.calculatePriceOfCar('reno', '') }, Error);
    })
    it('Should return result if first and second param are cortect and find car',()=>{
        expect(rentCar.calculatePriceOfCar('Audi',1)).to.equal(`You choose Audi and it will cost $36!`)
    })



    it('Should trow Error if first param is not cortect',()=>{
        assert.throws(() => { rentCar.checkBudget('reno', 2,200) }, Error);
    })
    it('Should trow Error if second param is not cortect',()=>{
        assert.throws(() => { rentCar.checkBudget( 2,'reno',200) }, Error);
    })
    it('Should trow Error if third param is not cortect',()=>{
        assert.throws(() => { rentCar.checkBudget( 2,200,'reno') }, Error);
    })
    it('Should trow Error if all params is not cortect',()=>{
        assert.throws(() => { rentCar.checkBudget( '2','200','reno') }, Error);
    })
    it('Should trow Error if all params is not cortect',()=>{
        assert.throws(() => { rentCar.checkBudget( '','','') }, Error);
    })
    it('Should return result if first,second and third param are cortect',()=>{
        expect(rentCar.checkBudget(20,2,50)).to.equal(`You rent a car!`)
    })
    it('Should return result if first,second and third param are cortect',()=>{
        expect(rentCar.checkBudget(20,2,40)).to.equal(`You rent a car!`)
    })

    it('Should return result if first,second and third param are cortect',()=>{
        expect(rentCar.checkBudget(20,2,30)).to.equal('You need a bigger budget!')
    })
})