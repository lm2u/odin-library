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

myLibrary.forEach(book => {
  console.log(book)
});