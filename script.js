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

addBookToLibrary("Atomic Habits", "James Clear", "2018", "320", true, 0)
addBookToLibrary("Daily Stoic", "Ryan Holiday", "2016", "418", true, 1)

//Pass on parameters to the Book constructor
function addBookToLibrary(title, author, year, pages, read, counter){
  const newBook = new Book(title, author, year, pages, read, counter)
  myLibrary.push(newBook)
  return newBook
}

//Apply initial styling to hardcoded elements
window.addEventListener("DOMContentLoaded",(e)=>{
  //This block is now irrelevant since we're loading the content dynamically
  //This is used when hardcoded, also change counter=2
  const readElements = document.querySelectorAll(".read")
  readElements.forEach(read => {
    readStyle(read)
  });
  displayBook(myLibrary[0])
  displayBook(myLibrary[1])
})

const sectionWrapper = document.querySelector(".library-section")
const bookForm = document.getElementById("create-book-form")

document.addEventListener("click",(e)=>{
  if(e.target.matches(".delete")){
    deleteBook(e.target.parentNode)
  }
  if(e.target.matches(".read")){
    console.log(e.target.parentNode.dataset.id)
    cardNum = e.target.parentNode.dataset.id.split("-")[1]
    toggleRead(e.target, cardNum)
  }
  
  //Toggle display form when clicking "New Book" button
  if(e.target.matches(".new-button")){
    (bookForm.style.display == 'block') ? bookForm.style.display = 'none' : bookForm.style.display ='block';
  }

  //Create newbook when clicking "Add" button
  if(e.target.matches("button[type='submit']")){
    createBook(bookForm)
  }
  // console.log(e.target)
})

//DOM Manipulation
//Make structure into cards
function displayBook(book){
  const cardWrapper = document.createElement("div")
  cardWrapper.classList.add("card-wrapper")
  cardWrapper.dataset.id = `card-${counter}`
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

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  year.textContent = `${book.year}`;
  pages.textContent = `${book.pages}`;
  delBtn.textContent = "Delete";
  // console.log(read)
  (book.read) ? read.textContent = "Read" : read.textContent = "No read";
  (book.read) ? read.style.backgroundColor = "green" : read.style.backgroundColor = "red";

  cardWrapper.appendChild(title)
  cardWrapper.appendChild(author)
  cardWrapper.appendChild(year)
  cardWrapper.appendChild(pages)
  cardWrapper.appendChild(read)
  cardWrapper.appendChild(delBtn)
}

//Event handler for the "submit" button
function createBook(bookForm){
  event.preventDefault()
  let bookObj = {}
  bookObj.title = bookForm.title.value
  bookObj.author = bookForm.author.value
  bookObj.year = bookForm.year.value
  bookObj.page = bookForm.page.value
  bookObj.read = bookForm.read.checked
  newBook = addBookToLibrary(bookObj.title, bookObj.author, bookObj.year, bookObj.page, bookObj.read, counter)
  // console.log(Book.prototype.title)
  console.log(newBook)
  displayBook(newBook)
  counter++
}

//Delete the card upon clicking.
//Tracking based on the data-id value of card-wrapper
function deleteBook(cardWrapper) {
  sectionWrapper.removeChild(cardWrapper)
}

function readStyle(element){
  (element.textContent=="Read") 
  ? element.style.backgroundColor = "green"
  : element.style.backgroundColor = "red"
}

function toggleRead(element, cardNum){
  console.log(myLibrary[cardNum])
  if(myLibrary[cardNum].read){
    myLibrary[cardNum].read = false;
    element.textContent = "No read";
    element.style.backgroundColor = "red";
  }else{
    myLibrary[cardNum].read = true;
    element.textContent = "Read";
    element.style.backgroundColor = "green"
  }
}
