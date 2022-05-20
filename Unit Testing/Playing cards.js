function cardCreator(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if(!faces.includes(face)){
        throw Error(`Invalid face: ${face}`)
    }

    if(!suits.hasOwnProperty(suit)){
        throw Error(`Invalid suit: ${suit}`)
    }

    return {
        face: face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}

console.log(cardCreator('2', 's').toString())