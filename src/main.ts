import { UI } from './UI.js';
import { Book } from './Book.js';
import { Store } from './Store.js';

const initApp = (): void => {
  const form = document.getElementById('form') as HTMLFormElement;
  const title = document.getElementById('title') as HTMLInputElement;
  const author = document.getElementById('author') as HTMLInputElement;
  const isbn = document.getElementById('isbn') as HTMLInputElement;
  const bookList = document.getElementById('bookList') as HTMLTableElement;

  // DISPLAY BOOKS ON LOAD
  UI.displayBooks();

  // FORM SUBMIT LISTENER
  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    if (!title.value || !author.value || !isbn.value) {
      UI.showAlert('Please fill in all fields', 'danger');
      return;
    }

    // Instantiate Book
    const book = new Book(title.value, author.value, isbn.value);

    // Add Book To UI
    UI.addBookToList(book);

    // Add Book To Local Storage
    Store.addBook(book);

    UI.showAlert('Book Added!', 'success');

    // Clear Inputs
    form.reset();
  });

  // DELETE LISTENER
  bookList.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const isbn = target.parentElement?.previousElementSibling?.textContent!;

    // Remove from UI
    UI.deleteBook(target);

    // Remove from Storage
    Store.removeBook(isbn);
  });
};

document.addEventListener('DOMContentLoaded', initApp);
