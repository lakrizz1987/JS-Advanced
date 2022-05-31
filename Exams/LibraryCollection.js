class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.booksCollection = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.booksCollection.length) {
            throw new Error('Not enough space in the collection.');
        }
        this.booksCollection.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let findBook = this.booksCollection.find(x => x.bookName == bookName);

        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (findBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        findBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let findBook = this.booksCollection.find(x => x.bookName == bookName);

        if (!findBook) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!findBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.booksCollection.splice(this.booksCollection.indexOf(findBook), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = [];
            result.push(`The book collection has ${this.capacity - this.booksCollection.length} empty spots left.`);

            this.booksCollection.forEach(x => result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed ? `Has Paid` : `Not Paid`}.`));
            return result.join('\n');

        } else {
            let findBook = this.booksCollection.find(x => x.bookAuthor == bookAuthor);

            if(findBook){
                return `${findBook.bookName} == ${findBook.bookAuthor} - ${findBook.payed ? `Has Paid` : `Not Paid`}.`
            }else{
                throw new Error (`${bookAuthor} is not in the collection.`)
            }
        }
    }


}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



