const library = [];

function Book(title,author,publisher,genre,pageCount,status)
{
    if(!new.target)
    {
        throw Error("You must use the `new`operator to call the constructor ");
    }

    this.id = crypto.randomUUID(),
    this.title = title,
    this.author = author,
    this.publisher = publisher,
    this.genre = genre,
    this.pageCount = pageCount,
    this.status = status
}

function addBookToLibary(title,author,publisher,genre,pageCount,status)
{
    const book = new Book(title,author,publisher,genre,pageCount,status);
    library.push(book);

}

function displayLibrary()
{
    bookshelf.replaceChildren();
    
    for(const book of library)
    {
        const newBookCard = document.createElement("div");
        newBookCard.className = "book-card";

        const newTitle = document.createElement("h2");
        newTitle.textContent = book.title;

        const newBookInfo = document.createElement("dl");
        newBookInfo.className = "book-info";

        const authorDT = document.createElement("dt");
        authorDT.textContent = "Author: "
        const authorDD = document.createElement("dd");
        authorDD.textContent = book.author;

        const publisherDT = document.createElement("dt");
        publisherDT.textContent = "Publisher: "
        const publisherDD = document.createElement("dd");
        publisherDD.textContent = book.publisher;

        const genreDT = document.createElement("dt");
        genreDT.textContent = "Genre: "
        const genreDD = document.createElement("dd");
        genreDD.textContent = book.genre;

        const pageCountDT = document.createElement("dt");
        pageCountDT.textContent = "Page count: "
        const pageCountDD = document.createElement("dd");
        pageCountDD.textContent = book.pageCount;

        const statusDT = document.createElement("dt");
        statusDT.textContent = "Status: : "
        const statusDD = document.createElement("dd");
        statusDD.textContent = book.status;

        newBookInfo.appendChild(authorDT);
        newBookInfo.appendChild(authorDD);
        newBookInfo.appendChild(publisherDT);
        newBookInfo.appendChild(publisherDD);
        newBookInfo.appendChild(genreDT);
        newBookInfo.appendChild(genreDD);
        newBookInfo.appendChild(pageCountDT);
        newBookInfo.appendChild(pageCountDD);
        newBookInfo.appendChild(statusDT);
        newBookInfo.appendChild(statusDD);

        newBookCard.appendChild(newTitle);
        newBookCard.appendChild(newBookInfo);

        bookshelf.appendChild(newBookCard);
    }
}

const bookshelf = document.getElementById("bookshelf");

const btnOpenModal = document.getElementById("btn-open-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnAddBook = document.getElementById("btn-add");

const modal = document.querySelector(".book-modal");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const publisherInput = document.getElementById("publisher");
const genreInput = document.getElementById("genre");
const pagesInput = document.getElementById("pages");
const statusInput = document.getElementById("status");

btnOpenModal.addEventListener("click", () => {
    modal.showModal();
});

btnCloseModal.addEventListener("click", () => {
    modal.close();
});

btnAddBook.addEventListener("click", (event) =>{

    const txtTitle = titleInput.value;
    const txtAuthor = authorInput.value;
    const txtPublisher = publisherInput.value;
    const txtGenre = genreInput.value;
    const txtPages = pagesInput.value;
    const txtStatus = statusInput.value;

    addBookToLibary(txtTitle,txtAuthor,txtPublisher,txtGenre,txtPages,txtStatus);
    
    event.preventDefault();
    modal.close();

    displayLibrary();
});