import { UI } from './UI.js';
import { Book } from './Book.js';

const initApp = () => {
  const form = document.getElementById('form') as HTMLFormElement;
  const title = document.getElementById('title') as HTMLInputElement;
  const author = document.getElementById('author') as HTMLInputElement;
  const isbn = document.getElementById('isbn') as HTMLInputElement;

  // Display Books On Load
  UI.displayBooks();

  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const book = new Book(title.value, author.value, isbn.value);

    console.log(book);
  });
};

document.addEventListener('DOMContentLoaded', initApp);
