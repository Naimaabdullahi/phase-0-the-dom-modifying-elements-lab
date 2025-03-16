// Write your code here!document.querySelector("main#main").remove();
document.querySelector("main#main").remove();
// Create a new <h1> element

const newHeader = document.createElement("h1");

// Set the id to "victory"
newHeader.id = "victory";

// Set the text content with your name
newHeader.textContent = "Naima is the champion";

// Append it to the body
document.body.append(newHeader);

