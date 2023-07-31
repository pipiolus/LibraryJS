const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close-modal')
const bookForm = document.getElementById('addBook');




// No storage for now, just an array to play!
const library = [];

//constructor

function Book(title, author, pages,) {

    this.title = title,
    this.author = author,
    this.pages = pages
};

// Use input values to create the obj
const getInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isread').checked;

    return new Book(title, author, pages, isRead);
}

const addBook = (e) => {
    e.preventDefault();

    const newBook = getInput();
    library.push(newBook);

    console.log(library)
}

// event listeners
openModalBtn.addEventListener('click', () => {
    bookForm.classList.add('modal-open')
})

closeModalBtn.addEventListener('click', () => bookForm.classList.remove('modal-open'))

bookForm.onsubmit = addBook;


