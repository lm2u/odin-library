//Empty array to store book objects
const myLibrary = []
let counter = 0;

//Book constructor function
function Book(title, author, year, pages, read, counter){
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
  this.counter = counter;
}

//Pass on parameters to the Book constructor
function addBookToLibrary(title, author, year, pages, read, counter){
  const newBook = new Book(title, author, year, pages, read, counter)
  myLibrary.push(newBook)
  return newBook
}

//DOM Manipulation
//Make structure into cards
const sectionWrapper = document.querySelector(".library-section")
function displayBook(book){
  const cardWrapper = document.createElement("div")
  cardWrapper.classList.add("card-wrapper")
  sectionWrapper.appendChild(cardWrapper)

  const title = document.createElement("h3")
  title.classList.add("title")
  const author = document.createElement("div")
  author.classList.add("author")
  const year = document.createElement("div")
  year.classList.add("year")
  const pages = document.createElement("div")
  pages.classList.add("pages")
  const read = document.createElement("div")
  read.classList.add("read")
  const delBtn = document.createElement("button")
  delBtn.classList.add("delete")
  delBtn.addEventListener("click",()=> deleteBook(cardWrapper))

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  year.textContent = `${book.year}`;
  pages.textContent = `${book.pages}`;
  // console.log(read)
  (book.read) ? read.textContent = "You have read" : read.textContent = "No read";
  delBtn.textContent = "Delete";

  (book.read) ? read.style.backgroundColor = "green" : read.style.backgroundColor = "red";
  read.addEventListener("click",()=>toggleRead(read))

  

  cardWrapper.appendChild(title)
  cardWrapper.appendChild(author)
  cardWrapper.appendChild(year)
  cardWrapper.appendChild(pages)
  cardWrapper.appendChild(read)
  cardWrapper.appendChild(delBtn)
}

function toggleRead(read){
    if (read.style.backgroundColor=="green") {
      read.style.backgroundColor = "red"
      read.textContent = "No read";  
      myLibrary[counter-1].read = false
    }else{
      read.style.backgroundColor = "green"
      read.textContent = "You have read";  
      myLibrary[counter-1].read = true;
    }
}

//Event handler for the "submit" button
const bookForm = document.getElementById("create-book-form")
bookForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  let bookObj = {}
  bookObj.title = bookForm.title.value
  bookObj.author = bookForm.author.value
  bookObj.year = bookForm.year.value
  bookObj.page = bookForm.page.value
  bookObj.read = bookForm.read.checked
  newBook = addBookToLibrary(bookObj.title, bookObj.author, bookObj.year, bookObj.page, bookObj.read, counter)
  // console.log(Book.prototype.title)
  displayBook(newBook)
  counter++
})

//Delete the card upon clicking.
//Tracking based on the data-id value of card-wrapper
function deleteBook(cardWrapper) {
  sectionWrapper.removeChild(cardWrapper)
}

