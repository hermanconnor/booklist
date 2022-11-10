import { IBook } from './interfaces/IBook';

export class UI {
  constructor() {}

  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'John Wick',
        isbn: '123456',
      },
      {
        title: 'Book Two',
        author: 'Jason Bourne',
        isbn: '789012',
      },
      {
        title: 'Book Three',
        author: 'James Bond',
        isbn: '012345',
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book: IBook) {
    const list = document.getElementById('bookList') as HTMLTableElement;

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'delete');
    button.textContent = 'X';

    td1.innerText = book.title;
    td2.innerText = book.author;
    td3.innerText = book.isbn;
    td4.appendChild(button);

    tr.append(td1, td2, td3, td4);

    list.appendChild(tr);
  }
}
