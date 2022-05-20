let rgbToHexColor = require('./RBG to HEX');
let {expect} = require('chai');

describe('Test rgbToHexColor',()=>{
    it('Try color RED is not valid positive num',()=>{
        expect(rgbToHexColor(299,155,155)).to.equal(undefined)
    })
    it('Try color RED is not valid negative num',()=>{
        expect(rgbToHexColor(-5,155,155)).to.equal(undefined)
    })

    it('Try color RED is not valid type',()=>{
        expect(rgbToHexColor('a',155,155)).to.equal(undefined)
    })

    it('Try color GREEN is not valid positive num',()=>{
        expect(rgbToHexColor(155,299,155)).to.equal(undefined)
    })
    it('Try color GREEN is not valid negative num',()=>{
        expect(rgbToHexColor(155,299,155)).to.equal(undefined)
    })
    it('Try color GREEN is not valid type',()=>{
        expect(rgbToHexColor(155,'a',155)).to.equal(undefined)
    })

    it('Try color GREEN is not valid type and negativ num',()=>{
        expect(rgbToHexColor(-155,'a',155)).to.equal(undefined)
    })

    it('Try color BLUE is not valid positive num',()=>{
        expect(rgbToHexColor(155,155,299)).to.equal(undefined)   //'#FF9EAA'
    })
    it('Try color BLUE is not valid negative num',()=>{
        expect(rgbToHexColor(155,155,299)).to.equal(undefined)
    })
    it('Try color BLUE is not valid type',()=>{
        expect(rgbToHexColor(155,155,'a')).to.equal(undefined)
    })

    it('Chek test is ok whit valid nums',()=>{
        expect(rgbToHexColor(255,158,170)).to.equal('#FF9EAA')
    })
})