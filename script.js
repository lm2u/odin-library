//Empty array to store book objects
const myLibrary = []

//Book constructor function
function Book(title, author, year, pages, read){
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

//Pass on parameters to the Book constructor
function addBookToLibrary(title, author, year, pages, read){
  const newBook = new Book(title, author, year, pages, read)
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

  title.textContent = `${book.title}`
  author.textContent = `${book.author}`
  year.textContent = `${book.year}`
  pages.textContent = `${book.pages}`
  read.textContent = `${book.read}`

  cardWrapper.appendChild(title)
  cardWrapper.appendChild(author)
  cardWrapper.appendChild(year)
  cardWrapper.appendChild(pages)
  cardWrapper.appendChild(read)
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
  bookObj.read = bookForm.read.value
  newBook = addBookToLibrary(bookObj.title, bookObj.author, bookObj.year, bookObj.page, bookObj.read)
  displayBook(newBook)
})
