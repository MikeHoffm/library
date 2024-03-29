/* Globally Accessible Variables / Arrays etc */
const myLibrary = [];
const cardContainer = document.getElementById('card-container');
const addBook = document.getElementById('new-book');

/* Form Variables */
const formContainer = document.getElementById('form-container');
const formSubmit = document.querySelector('.submit');
const closeBtn = document.getElementById('close-form');

// Remove form from DOM display
function removeForm() {
  formContainer.style.display = 'none';
}

// Start page with form hidden
removeForm();

// Constructs Book Objects, with the toggleStatus functionality set on the Book prototype
class Book {
  constructor(bookTitle, bookAuthor, bookPages, readStatus) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = readStatus;
  }

  toggleStatus = () => {
    if (this.read === true) {
      this.read = false;
    } else {
      this.read = true;
    }
  };
}

// Collect user input from form
// Push through Object constructor & store in myLibrary
function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read-status').checked;

  myLibrary.push(new Book(title, author, pages, read));
}

// Clears the card container of any individual cards
function clearDisplay() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}

// Creates individual cards based on current content myLibrary array
function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newCard = document.createElement('div');
    newCard.classList.add('cards');
    cardContainer.appendChild(newCard);

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('title-card');
    newCard.appendChild(cardTitle);
    cardTitle.innerText = `Title: ${myLibrary[i].title}`;

    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('author-card');
    newCard.appendChild(cardAuthor);
    cardAuthor.innerText = `Author: ${myLibrary[i].author}`;

    const cardPages = document.createElement('p');
    cardPages.classList.add('pages-card');
    newCard.appendChild(cardPages);
    cardPages.innerText = `${myLibrary[i].pages} pages`;

    // Set data attribute on the newly created card, corresponding with it's array index
    newCard.dataset.index = i;
    const bookIndex = newCard.dataset.index;

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class', 'remove-button');
    newCard.appendChild(removeBtn);
    removeBtn.innerText = 'Remove Book';
    const btnIndex = bookIndex;

    // Access the index of the button pressed, remove the corresponding
    // book from library array & update display
    removeBtn.addEventListener('click', () => {
      myLibrary.splice(btnIndex, 1);
      clearDisplay();
      displayBook();
    });

    // Create Ability to toggle read status
    const toggleRead = document.createElement('button');
    toggleRead.setAttribute('class', 'toggle-read');
    newCard.appendChild(toggleRead);

    if (myLibrary[i].read === true) {
      toggleRead.innerText = 'READ';
    } else {
      toggleRead.innerText = 'UNREAD';
    }

    toggleRead.addEventListener('click', () => {
      myLibrary[i].toggleStatus();
      if (myLibrary[i].read === false) {
        toggleRead.innerText = 'UNREAD';
      } else {
        toggleRead.innerText = 'READ';
      }
    });
  }
}

// Add New Book Button - Display a clear form each button press
addBook.addEventListener('click', () => {
  document.getElementById('form').reset();
  formContainer.style.display = 'block';
});

// Close form without submitting button
closeBtn.addEventListener('click', () => {
  removeForm();
});

// When submit is pressed, add book values to library array
// remove form from display
// display the new book card in the dom
formSubmit.addEventListener('click', () => {
  event.preventDefault();
  addBookToLibrary();
  removeForm();
  clearDisplay();
  displayBook();
});
