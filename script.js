const bookGrid = document.querySelector('.book-grid');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close-modal');
const bookForm = document.getElementById('addBook');
const isReadBtn = document.getElementById('#isread');
const allBtns = document.querySelectorAll('.btn-holder');


//constructors

function Book(title, author, pages, isRead) {

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead

};



class Library {
    constructor() {
      this.books = []
    }
  
    addBook(newBook) {
        this.books.push(newBook)
    }
  
    removeBook(title) {
      this.books = this.books.filter((book) => book.title !== title)
    }
  
    getBook(title) {
      return this.books.find((book) => book.title === title)
    }
}

const library = new Library();

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
   /*  library.books.push(newBook); */

    library.addBook(newBook) 
        updateBooksGrid();
    

}

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    

    title.textContent = `Title: "${book.title}"`
  author.textContent = `Author: ${book.author}`
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = 'Remove'


  bookCard.classList.add('book-card')
  readBtn.classList.add('btn')
  removeBtn.classList.add('btn')
 /*  readBtn.onclick = toggleRead
  removeBtn.onclick = removeBook */

  if (book.isRead) {
    readBtn.textContent = 'Read';
    readBtn.classList.add('btn-light-green');
  } else {
    readBtn.textContent = 'Not read'
    readBtn.classList.add('btn-light-red')
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(readBtn)
  bookCard.appendChild(removeBtn)
  bookGrid.appendChild(bookCard)
}


const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
      createBookCard(book)
    }
  }
  
  const resetBooksGrid = () => {
    bookGrid.innerHTML = ''
  }



// event listeners
openModalBtn.addEventListener('click', () => {
    bookForm.classList.add('modal-open')
})

closeModalBtn.addEventListener('click', () => bookForm.classList.remove('modal-open'))

bookForm.onsubmit = addBook;





// weird function to make the checkbox a toggle button. Guess it could been better :( 

for (i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];

    btn.addEventListener('click', function () {
        let allNodes = btn.children;

        // find all childern and check them for add class and change checkbox state
        for (j = 0; j < allNodes.length; j++) {
            let node = allNodes[j];
            let isActive;

            // check for btn circle and change it's css class
            if (node.classList.contains('btn-circle')) {
                if (!node.classList.contains('active')) {
                    node.classList.add('active');
                    isActive = true;
                } else {
                    node.classList.remove('active');
                    isActive = false;
                }
            }

            // check for check box and change it's state
            if (node.classList.contains('checkbox')) {
                if (isActive) {
                    node.checked = true;
                } else {
                    node.checked = false;
                }
            }
        }
    })
}

