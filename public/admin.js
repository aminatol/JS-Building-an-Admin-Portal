// Your Code Here
//Retrieve a list of books from the server.

async function getBooks() {
  let response = await fetch("http://localhost:3001/listBooks");

  let books = await response.json();

  books.forEach(renderBook);
}
// Display list of books to admin
function listBooks(book) {
  let root = document.querySelector("#root");
  let list = document.createElement("li");
  list.textContent = book.title;

  let bookInput = document.createElement("input");
  bookInput.value = book.quantity;
  // Place a save button next to each input
  let submitButton = document.createElement("button");
  submitButton.textContent = "Save";
  //When the submit button is clicked, retrieve the quantity from  text input and save the updated quantity to the server.
  submitButton.addEventListener("click", () => {
    fetch("http://localhost:3001/updateBook", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: book.id,
        quanitity: bookInput.value,
      }),
    });
  });
  list.append(bookInput, submitButton);

  root.append(list);
}

getBooks();
