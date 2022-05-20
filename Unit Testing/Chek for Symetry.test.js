let isSymmetric = require('./Chek for Symetry');
let expect = require('chai').expect;

describe('isSymmetric test',()=>{
    it('Chek with wrong argument',()=>{
        expect(isSymmetric('1')).to.equal(false)
    });

    it('Chek for symetry whith corect argument numbers',()=>{
        expect(isSymmetric([1,2,1])).to.equal(true)
    });

    it('Chek for symetry whith corect argument string',()=>{
        expect(isSymmetric(['1',2,'1'])).to.equal(true)
    });

    it('Chek for no-symetry whith corect argument',()=>{
        expect(isSymmetric([1,2])).to.equal(false)
    });

    it('Chek for no-symetry whith corect argument different types',()=>{
        expect(isSymmetric([1,'1'])).to.equal(false)
    });
})