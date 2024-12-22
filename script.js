const myLibrary = [
  {
    title:"ABC",
    author:"DEF",
    year:1,
    pages:2,
    read:true
  },
  {
    title:"ABCE",
    author:"DEFK",
    year:9,
    pages:4,
    read:false
  }
]

function Book(title, author, year, pages, read){
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;

}

function addBookToLibrary(){
  const newBook = new Book(title, author, year, pages, read)
  myLibrary.push(newBook)
}


const sectionWrapper = document.querySelector(".library-section")

myLibrary.forEach(book => {
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

});