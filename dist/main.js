import { UI } from './UI.js';
import { Book } from './Book.js';
const initApp = () => {
    const form = document.getElementById('form');
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const isbn = document.getElementById('isbn');
    const bookList = document.getElementById('bookList');
    UI.displayBooks();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!title.value || !author.value || !isbn.value) {
            UI.showAlert('Please fill in all fields', 'danger');
            return;
        }
        const book = new Book(title.value, author.value, isbn.value);
        UI.addBookToList(book);
        UI.clearInputs();
    });
    bookList.addEventListener('click', (e) => {
        const target = e.target;
        UI.deleteBook(target);
    });
};
document.addEventListener('DOMContentLoaded', initApp);
