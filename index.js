/* Globally Accessible Variables / Arrays etc */
const myLibrary = [];
const cardContainer = document.getElementById('card-container');
/* Form Variables */
const formContainer = document.getElementById('form-container');
formContainer.style.display = 'none';
const formSubmit = document.querySelector('.submit');


// Object Constructor Function for Books
function Book(bookTitle, bookAuthor, bookPages) {
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
}


// Collect user input from form 
// Push through Object constructor & store in myLibrary
function addBookToLibrary() {
  let titleValue = document.getElementById('title').value;
  let authorValue = document.getElementById('author').value;
  let pagesValue = document.getElementById('pages').value;

  myLibrary.push(new Book(titleValue, authorValue, pagesValue));
  console.log(myLibrary);
}

// Clears the card container of any individual cards
function clearDisplay() {
  while(cardContainer.firstChild) {
   cardContainer.removeChild(cardContainer.firstChild);
  }
   }

// Creates individual cards based on current content myLibrary array
function displayBook() {
  for(let i = 0; i < myLibrary.length; i++) {
  
    const newCard = document.createElement('div');
    newCard.classList.add('cards');
    cardContainer.appendChild(newCard);

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('title-card');
    newCard.appendChild(cardTitle);
    cardTitle.innerText = `Title: ${myLibrary[i].title}`

    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('author-card');
    newCard.appendChild(cardAuthor);
    cardAuthor.innerText = `Author: ${myLibrary[i].author}`

    const cardPages = document.createElement('p');
    cardPages.classList.add('pages-card');
    newCard.appendChild(cardPages);
    cardPages.innerText = `${myLibrary[i].pages} pages`

    //Set data attribute on the newly created card, corresponding with it's array index
    newCard.dataset.index = i;
    let bookIndex = newCard.dataset.index;

    const removeBtn = document.createElement('button');
    removeBtn.setAttribute('class','remove-button');
    newCard.appendChild(removeBtn);
    removeBtn.innerText = 'Remove Book';
    let btnIndex = bookIndex;

    // Access the index of the button pressed, remove the corresponding book from library array & update display
    removeBtn.addEventListener('click', (event) => { 
      myLibrary.splice(btnIndex,1);
      console.log(myLibrary);
      clearDisplay();
      displayBook();
    })


  }
  }

 // Add New Book Button - Display a clear form each button press
const addBook = document.getElementById('new-book');

addBook.addEventListener('click', () => {
  document.getElementById('form').reset();
  formContainer.style.display = 'block';
});

// Remove form from DOM display
function removeForm() {
  formContainer.style.display = 'none';
}

//Close form without submitting button
let closeBtn = document.getElementById('close-form');
closeBtn.addEventListener('click', ()=> {
  removeForm();
})

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

// Add a button to each books display to remove the book from the library

//get index of the button being pressed
// get the book with the corresponding index
// remove the book from DOM, whilst removing it from array
//clear the display, then update with displayBook() with new array
// update the display with new array

function getBtnIndex(index) {
//on function call, select the button with the specified index
console.log(button);
}

function removeBook() {
  //on function call, remove corresponding book and array item
  console.log(btnIndex);
}