import BookClass from './book-class.js';
import show from './show.js';

// === declaration of variables === //
let elBookContainer;
let elID;
let elTitle;
let elAuthor;
let elRemoveBtn;
const elBookList = document.querySelector('.book-list');

export function createElements() {
  elBookContainer = document.createElement('div');
  elBookContainer.classList = 'book-container';
  elID = document.createElement('p');
  elTitle = document.createElement('p');
  elAuthor = document.createElement('p');
  elRemoveBtn = document.createElement('button');
  elRemoveBtn.textContent = 'Remove';
}

export function appendElements(book) {
  elBookList.appendChild(elBookContainer);

  elID.innerText = book.getId();
  elID.hidden = true;
  elBookContainer.appendChild(elID);

  elTitle.innerText = `${book.getTitle()} by `;
  elBookContainer.appendChild(elTitle);

  elAuthor.innerText = book.getAuthor();
  elBookContainer.appendChild(elAuthor);

  elBookContainer.appendChild(elRemoveBtn);

  // === button to remove item from the list book === //
  elRemoveBtn.addEventListener('click', () => {
    BookClass.bookArray = BookClass.bookArray.filter((ele) => ele.id !== book.getId());
    localStorage.setItem('bookList', JSON.stringify(BookClass.bookArray));
    show('list');
  });
}
