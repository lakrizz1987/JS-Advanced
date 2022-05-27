let bookSelection = require('./bookSelection');
let {expect,assert} = require('chai');

describe('Test bookSelecton',()=>{
    it('Should return Books with ${genre} genre are not suitable for kids at ${age} age',()=>{
        expect(bookSelection.isGenreSuitable("Thriller",11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`)
    })

    it('Should return Books with ${genre} genre are not suitable for kids at ${age} age',()=>{
        expect(bookSelection.isGenreSuitable("Thriller",12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`)
    })

    it('Should return Books with ${genre} genre are not suitable for kids at ${age} age',()=>{
        expect(bookSelection.isGenreSuitable("Thriller",1)).to.equal(`Books with Thriller genre are not suitable for kids at 1 age`)
    })
    it('Should return Books with ${genre} genre are not suitable for kids at ${age} age',()=>{
        expect(bookSelection.isGenreSuitable("Horror",11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`)
    })

    it('Should return Books with ${genre} genre are not suitable for kids at ${age} age',()=>{
        expect(bookSelection.isGenreSuitable("Horror",12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`)
    })

    it('Should return Books with ${genre} genre are not suitable for kids at ${age} age',()=>{
        expect(bookSelection.isGenreSuitable("Horror",1)).to.equal(`Books with Horror genre are not suitable for kids at 1 age`)
    })

    it(`Those books are suitable`,()=>{
        expect(bookSelection.isGenreSuitable("Thriller",13)).to.equal(`Those books are suitable`)
    })

    it(`Those books are suitable`,()=>{
        expect(bookSelection.isGenreSuitable("Horror",13)).to.equal(`Those books are suitable`)
    })

    it(`Those books are suitable`,()=>{
        expect(bookSelection.isGenreSuitable("Ivo",13)).to.equal(`Those books are suitable`)
    })

    it(`Those books are suitable`,()=>{
        expect(bookSelection.isGenreSuitable("Ivo",1)).to.equal(`Those books are suitable`)
    })





    it(`Should return Error for not number param`,()=>{
        assert.throws(() => { bookSelection.isItAffordable('asd',2) }, Error)
    })
    it(`Should return Error for not number param`,()=>{
        assert.throws(() => { bookSelection.isItAffordable(12,'2') }, Error)
    })
    it(`Should return Error for not number param`,()=>{
        assert.throws(() => { bookSelection.isItAffordable('asd','2') }, Error)
    })

    it(`Should return NOT ENOUGHT MONEY`,()=>{
        expect(bookSelection.isItAffordable(10,1)).to.equal("You don't have enough money")
    })
    it(`Should return NOT ENOUGHT MONEY`,()=>{
        expect(bookSelection.isItAffordable(11,10)).to.equal("You don't have enough money")
    })
    it(`Should return result money`,()=>{
        expect(bookSelection.isItAffordable(11,12)).to.equal(`Book bought. You have 1$ left`)
    })
    it(`Should return result money`,()=>{
        expect(bookSelection.isItAffordable(12,12)).to.equal(`Book bought. You have 0$ left`)
    })






    it(`Should return Error for right param`,()=>{
        assert.throws(() => { bookSelection.suitableTitles('a',2) }, Error)
    })
    it(`Should return Error for right param`,()=>{
        assert.throws(() => { bookSelection.suitableTitles([],2) }, Error)
    })
    it(`Should return Error for right param`,()=>{
        assert.throws(() => { bookSelection.suitableTitles({},'sss') }, Error)
    })

    it(`Should return Error for right param`,()=>{
        assert.throws(() => { bookSelection.suitableTitles(2,'sss') }, Error)
    })

    it(`Should return Error for right param`,()=>{
        assert.throws(() => { bookSelection.suitableTitles(44,66) }, Error)
    })

    it(`Should return Error for right param`,()=>{
        assert.throws(() => { bookSelection.suitableTitles(undefined,undefined) }, Error)
    })

    it(`Should return arr`,()=>{
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],"Thriller")[0]).to.equal("The Da Vinci Code")
    })

})