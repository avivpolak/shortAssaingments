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

    finishCurrentBook = () => {
        this.current.read = true;
        this.current.readdate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.next = this.findnext();
    };

    findnext = () => {
        for (let book of this.Books) {
            if (!book.read) return book;
        }
    };
    render = () => {
        document.getElementById("table").innerHTML =
            "<tr><td></td><td>title</td><td>genre</td><td>author</td><td>read</td><td>readdate</td></tr>";
        for (let book of this.Books) {
            book.renderToTable();
        }
    };
    finish = () => {
        this.finishCurrentBook();
        this.render();
    };
}
class Book {
    constructor(title, genre, author, read, readdate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readdate = readdate;
    }
    renderToTable = () => {
        let tr = document.createElement("tr");
        let empty = document.createElement("td");
        let title = document.createElement("td");
        let genre = document.createElement("td");
        let author = document.createElement("td");
        let read = document.createElement("td");
        let readdate = document.createElement("td");
        title.append(this.title);
        genre.append(this.genre);
        author.append(this.author);
        read.append(this.read);
        readdate.append(this.readdate);
        tr.append(empty);
        tr.append(title);
        tr.append(genre);
        tr.append(author);
        tr.append(read);
        tr.append(readdate);
        document.getElementById("table").appendChild(tr);
    };
}

// function finish() {
//     mybooks.finishCurrentBook();
//     mybooks.render();
// }
let Books = [];
for (let i = 0; i < 10; i++) {
    let book = new Book(i, i, i, false);
    Books.push(book);
}
let mybooks = new BookList(2, 8, Books[1], Books[0], undefined, Books);
document.getElementById("finish").addEventListener("click", mybooks.finish);
