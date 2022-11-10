import { UI } from './UI.js';
import { Book } from './Book.js';
const initApp = () => {
    const form = document.getElementById('form');
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const isbn = document.getElementById('isbn');
    UI.displayBooks();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const book = new Book(title.value, author.value, isbn.value);
        console.log(book);
    });
};
document.addEventListener('DOMContentLoaded', initApp);
