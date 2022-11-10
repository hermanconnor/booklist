export class Store {
    constructor() { }
    static getBooks() {
        return JSON.parse(localStorage.getItem('books') || '[]');
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks().filter((book) => book.isbn !== isbn);
        localStorage.setItem('books', JSON.stringify(books));
    }
}
