import { IBook } from './interfaces/IBook';

export class Store {
  constructor() {}

  static getBooks(): IBook[] {
    return JSON.parse(localStorage.getItem('books') || '[]');
  }

  static addBook(book: IBook) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn: string) {
    const books = Store.getBooks().filter((book) => book.isbn !== isbn);

    localStorage.setItem('books', JSON.stringify(books));
  }
}
