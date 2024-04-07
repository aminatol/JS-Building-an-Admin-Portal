
// Your Code Here
//Retrieve a list of books from the server.

async function getBooks() {
 
let reponse= await fetch("http://localhost:3001/listBooks")

let books= await response.json()

 books.forEach(renderBook)

}

function listBooks(){

    let root= document.querySelector("#root");
    let list= document.createElement("li")
    list.textContent= book.title

    

}