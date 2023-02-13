const myLibrary = [];
const cardContainer = document.getElementById('card-container');

function Book(bookTitle, bookAuthor, bookPages) {
  this.name = bookTitle;
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

// create a function that loops through
// mylibrary and creates a card for each individual object

function displayBook() {
  const cardTitle = document.getElementById('title-card');
  const cardAuthor = document.getElementById('author-card');
  const cardPages = document.getElementById('pages-card');

  for (let i = 0; i < myLibrary.length; i++) {
    cardTitle.innerHTML = myLibrary[i].name;
    cardAuthor.innerHTML = myLibrary[i].author;
    cardPages.innerHTML = myLibrary[i].pages;
  }
}

// make function that will automatically create a div (with the ".cards" class set on it
// and append it to the card-container div
// add this function into the displayBook function
function createCard() {
  const newCard = document.createElement('div');
  newCard.setAttribute('class', 'cards');
}
