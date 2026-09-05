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
    for(const book of library)
    {
        console.log(`id: ${book.id}`);
        console.log(`title: ${book.title}`);
        console.log(`author: ${book.author}`);
        console.log(`publisher: ${book.publisher}`);
        console.log(`genre: ${book.genre}`);
        console.log(`page count: ${book.pageCount}`);
        console.log(`status: ${book.status}`);
        console.log("");
    }
}

addBookToLibary("libro1","autor1","edito1","terror",102,"not readed");
addBookToLibary("libro2","autor2","edito2","accion",253,"not readed");

displayLibrary();