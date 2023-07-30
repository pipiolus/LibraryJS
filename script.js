
let bookArray = [];

function Book(title, author, pages,) {

    this.title = title,
    this.author = author,
    this.pages = pages
};

const addBook = (title, author, pages) => { 

    let book = new Book(title, author, pages);
    bookArray.push(book);

    return bookArray;
}

console.log(addBook("Star Wars", "John Lucas", 100));
console.log(addBook("Syuir asds", "Iohn cucas", 120));

