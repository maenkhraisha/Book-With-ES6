import show from './show.js';
import BookClass from './book-class.js';
import createBookList from './create-book-list.js';

const btnAdd = document.getElementById('add-btn');
const inputTitle = document.getElementById('title-input');
const inputAuthor = document.getElementById('author-input');

export default btnAdd.addEventListener('click', () => {
  const book = new BookClass(
    undefined,
    inputTitle.value,
    inputAuthor.value,
  );
  book.Add();
  inputTitle.innerText = '';
  inputAuthor.innerText = '';
  createBookList();
  show('list');
});
