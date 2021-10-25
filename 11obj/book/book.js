class BookList {
    constructor(read, unRead, next, current, last, Books) {
        this.read = read;
        this.unRead = unRead;
        this.next = next;
        this.current = current;
        this.last = last;
        this.Books = Books;
    }
    add(Book) {
        this.Books.push(Book);
    }

    finishCurrentBook() {
        this.current.read = true;
        this.current.readdate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.next = this.findnext();
    }

    findnext() {
        for (let book of this.Books) {
            if (!book.read) return book;
        }
    }
}
class Book {
    constructor(title, genre, author, read, readdate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readdate = readdate;
    }
}

let Books = [];
for (let i = 0; i < 10; i++) {
    let book = new Book(i, i, i, false);
    Books.push(book);
}
let mybooks = new BookList(2, 8, new Book(), new Book(), new Book(), Books);

mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();
mybooks.finishCurrentBook();

console.log(mybooks);
