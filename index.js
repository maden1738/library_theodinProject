const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function addBookToLibrary(title, author, pages, read) {
//   newBook = new Book(title, author, pages, read);
//   myLibrary.push(newBook);
// }

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
  books.forEach((el) => {
    card = document.createElement("div");

    card.innerHTML = `<p>${el.title}</p>
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

    closeButton = document.createElement("button"); // adding a close button
    closeButton.innerText = "Remove Book";
    card.appendChild(closeButton);

    card.className = "card";
    document.getElementById("card_container").appendChild(card);
  });
}
