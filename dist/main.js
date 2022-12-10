import { UI } from './UI.js';
import { Book } from './Book.js';
import { Store } from './Store.js';
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
        Store.addBook(book);
        UI.showAlert('Book Added!', 'success');
        form.reset();
    });
    bookList.addEventListener('click', (e) => {
        var _a, _b;
        const target = e.target;
        const isbn = (_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.previousElementSibling) === null || _b === void 0 ? void 0 : _b.textContent;
        UI.deleteBook(target);
        Store.removeBook(isbn);
    });
};
document.addEventListener('DOMContentLoaded', initApp);
