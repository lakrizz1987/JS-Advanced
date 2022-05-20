function printDeckOfCards(cards) {
    let isWrong = false;
    function createCard(face, suit) {
        // Use the solution from the previous task
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        if (!faces.includes(face)) {
            throw Error(`Invalid face: ${face}`)
        }

        if (!suits.hasOwnProperty(suit)) {
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
    // TODO
    let result = [];
    /*
    cards.map(line => {
        let arr = line.split('');
        let suit = arr.pop();
        let face = arr.join('');
        let card = createCard(face, suit).toString();
        if(isWrong){
            console.log(`Invalid card: ${face+suit}`);
            return
        }else{
            resul.push(card)
        }
       
    });

    if(!isWrong){
        console.log(resul.join(' '));
    }
    */
    for (const card of cards) {
        let arr = card.split('');
        let suit = arr.pop();
        let face = arr.join('');
        try {
            result.push(createCard(face, suit).toString())
        } catch {
            console.log(`Invalid card: ${face + suit}`)
            return
        }
    }

    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '1C'])