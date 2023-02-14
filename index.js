const myLibrary = [];
const cardContainer = document.getElementById('card-container');

function Book(bookTitle, bookAuthor, bookPages) {
  this.title = bookTitle;
  this.author = bookAuthor;
  this.pages = bookPages;
}

// get user input for book title, pages, author

// const userPrompt = prompt("Enter a book, it's author, and pages", 'e.g. The Hobbit, Tolkein, 400');

// split users book info up into an array
// const inputArray = userPrompt.split(',');

function addBookToLibrary() {
  // taking the users input (thats been split into an array with inputArray)
  // add book title, author and pages into the mylibrary array

  // myLibrary.push(new Book(inputArray[0], inputArray[1], inputArray[2]));
}

// step 3
// create book objects to populate display
// push these objects into the mylibrary array

const book1 = new Book('hobbit', 'tolk', '300');
const book2 = new Book('Born a crime', 'trevor', '200');
const book3 = new Book('Modern Love', 'aziz', '150');

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// make function that will automatically create a div (with the ".cards" class set on it
// and append it to the card-container div

// create a function that loops through
// mylibrary and creates a card for each individual object

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newCard = document.createElement('div');
    newCard.classList.add('cards');
    cardContainer.appendChild(newCard);

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('title-card');
    newCard.appendChild(cardTitle);
    cardTitle.innerText = myLibrary[i].title;

    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('author-card');
    newCard.appendChild(cardAuthor);
    cardAuthor.innerText = myLibrary[i].author;

    const cardPages = document.createElement('p');
    cardPages.classList.add('pages-card');
    newCard.appendChild(cardPages);
    cardPages.innerText = `Pages: ${myLibrary[i].pages}`;
  }
}

// CREATE A BUTTON TO MAKE THE FORM POP UP, ONCE INFO IS ENTERED THE FORM
// DISAPPEARS with element.style.display = 'none', and element.style.display = 'block';
const newBook = document.getElementById('new-book');

newBook.addEventListener('click', () => {

});
