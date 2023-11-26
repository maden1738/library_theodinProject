const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}
addBookToLibrary("The Philosopher's Stone", "JK Rowling", 500, "read");
addBookToLibrary("Game of Thrones", "George RR Martin", 500, "read");

// console.log(myLibrary[0]);
// document.addEventListener("DOMContentLoaded", () => {
//   myLibrary.forEach((el) => {
//     div = document.createElement("div");
//     ul = document.createElement("ul");
//     for (i = 0; i < 4; i++) {
//       li = document.createElement("li");
//       li.innerText = el;
//       ul.appendChild("li");
//     }
//   });
// });
