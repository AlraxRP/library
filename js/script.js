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
    const bookshelf = document.getElementById("bookshelf");

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

addBookToLibary("libro1","autor1","edito1","terror",102,"not readed");
addBookToLibary("libro2","autor2","edito2","accion",253,"not readed");

displayLibrary();