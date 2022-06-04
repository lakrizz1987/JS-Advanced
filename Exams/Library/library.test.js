let library = require('./library');
let { assert, expect } = require('chai');

describe('Test library functions', () => {
    it('Test calcPriceOfBook if first param is num not a string', () => {
        assert.throws(() => { library.calcPriceOfBook(2, 1899) }, Error);
    })
    it('Test calcPriceOfBook if first param is arr not a string', () => {
        assert.throws(() => { library.calcPriceOfBook(['asdads'], 1899) }, Error);
    })
    it('Test calcPriceOfBook if second param is arr not a num', () => {
        assert.throws(() => { library.calcPriceOfBook('asdads', [1899]) }, Error);
    })
    it('Test calcPriceOfBook if second param is str not a num', () => {
        assert.throws(() => { library.calcPriceOfBook('asdads', '1899') }, Error);
    })
    it('Test calcPriceOfBook whith right params and 50% discount', () => {
        expect(library.calcPriceOfBook('Miami', 1980)).to.equal('Price of Miami is 10.00')
    })
    it('Test calcPriceOfBook whith right params and 50% discount', () => {
        expect(library.calcPriceOfBook('Miami', 1960)).to.equal('Price of Miami is 10.00')
    })
    it('Test calcPriceOfBook whith right params and no discount', () => {
        expect(library.calcPriceOfBook('Miami', 2000)).to.equal('Price of Miami is 20.00')
    })



    it('Test findBook  if arr is 0', () => {
        assert.throws(() => { library.findBook([], '1899') }, Error);
    })

    it('Test findBook if found searched book', () => {
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal("We found the book you want.")
    })
    it('Test findBook if no found searched book', () => {
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Moni')).to.equal("The book you are looking for is not here!")
    })



    it('Test arrangeTheBooks  with negative num', () => {
        assert.throws(() => { library.arrangeTheBooks(-2) }, Error);
    })
    it('Test arrangeTheBooks  with str', () => {
        assert.throws(() => { library.arrangeTheBooks('2') }, Error);
    })
    it('Test arrangeTheBooks  with empty str', () => {
        assert.throws(() => { library.arrangeTheBooks('') }, Error);
    })

    it('Test arrangeTheBooks if all book are aranged', () => {
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
    })
    it('Test arrangeTheBooks if all book are aranged', () => {
        expect(library.arrangeTheBooks(35)).to.equal("Great job, the books are arranged.")
    })
    it('Test arrangeTheBooks if all book are aranged', () => {
        expect(library.arrangeTheBooks(3)).to.equal("Great job, the books are arranged.")
    })
    it('Test arrangeTheBooks if no all book are aranged', () => {
        expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.")
    })
    

})