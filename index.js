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

document.addEventListener("DOMContentLoaded", () => {
  myLibrary.forEach((el) => {
    card = document.createElement("div");
    console.log(el);
    para1 = document.createElement("p");
    para1.innerText = el.title;
    card.appendChild(para1);
    para2 = document.createElement("p");
    para2.innerText = `Written By: ${el.author}`;
    card.appendChild(para2);
    para3 = document.createElement("p");
    para3.innerText = `Pages: ${el.pages}`;
    card.appendChild(para3);
    para4 = document.createElement("p");
    para4.innerText = `Status: ${el.read}`;
    card.appendChild(para4);
    card.className = "card";
    document.getElementById("card_container").appendChild(card);
  });
});
