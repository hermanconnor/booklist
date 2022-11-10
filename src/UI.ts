import { IBook } from './interfaces/IBook';
import { Store } from './Store.js';

export class UI {
  constructor() {}

  static displayBooks() {
    const books = Store.getBooks();

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

  static deleteBook(target: HTMLButtonElement) {
    if (target.classList.contains('delete')) {
      target.parentElement?.parentElement?.remove();
      UI.showAlert('Book Removed!', 'success');
    }
  }

  static showAlert(message: string, className: string) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.getElementById('container') as HTMLDivElement;
    const form = document.getElementById('form') as HTMLFormElement;

    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert')?.remove();
    }, 2000);
  }

  static clearInputs() {
    const title = document.getElementById('title') as HTMLInputElement;
    const author = document.getElementById('author') as HTMLInputElement;
    const isbn = document.getElementById('isbn') as HTMLInputElement;

    title.value = '';
    author.value = '';
    isbn.value = '';
  }
}
