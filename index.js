const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  newBook = new Book(
    data.get("title"),
    data.get("author"),
    data.get("pages"),
    data.get("read")
  );
  console.log(newBook);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks(myLibrary);
}

function removeBook(bookIndex) {
  const bookId = bookIndex.getAttribute("data-index"); // gets the index the close button belongs to
  cardToBeDeleted = document.getElementById(bookId);
  cardToBeDeleted.remove(); // removing card
  myLibrary.splice(bookId, 1); //removing book from library
}

document.addEventListener("DOMContentLoaded", () => {
  modal = document.querySelector("[data-modal]");
  document.querySelector("[data-open-modal]").addEventListener("click", () => {
    modal.showModal();
  });
  document.querySelector("[data-close-modal]").addEventListener("click", () => {
    modal.close();
  });
});

function displayBooks(books) {
  document.querySelector("[data-modal]").close();
  document.getElementById("card_container").innerHTML = "";
  books.forEach((el, index) => {
    card = document.createElement("div");

    card.innerHTML = `<h2>${el.title}</h2>
                         <p>Written By: ${el.author}</p>
                         <p>Pages: ${el.pages}</p>
                         <p>Title: ${el.title}</p>
                         <p>Read: ${el.read}</p>`;

    // para1 = document.createElement("p");
    // para1.innerText = el.title;
    // card.appendChild(para1);
    // para2 = document.createElement("p");
    // para2.innerText = `Written By: ${el.author}`;
    // card.appendChild(para2);
    // para3 = document.createElement("p");
    // para3.innerText = `Pages: ${el.pages}`;
    // card.appendChild(para3);
    // para4 = document.createElement("p");
    // para4.innerText = `Status: ${el.read}`;
    // card.appendChild(para4);

    removeButton = document.createElement("button"); // adding a  button to remove a card
    removeButton.innerText = "Remove Book";
    removeButton.setAttribute("data-index", index); // so that we know which index in myLibrary[] the removeButton belongs to
    removeButton.setAttribute("onclick", "removeBook(this)");
    card.appendChild(removeButton);

    card.className = "card";
    card.setAttribute("id", `${index}`);
    document.getElementById("card_container").appendChild(card);
  });
}
