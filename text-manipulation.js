import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

// Select the input element
let input = document.querySelector('.form-control');

// Initialize a counter
let count = 0;

// Add event listener for 'keyup' event
input.addEventListener('keyup', function(event) {
  // Check if 'Enter' was pressed
  // KeyCode taken from https://css-tricks.com/snippets/javascript/javascript-keycodes/
  if (event.keyCode === 13  && count < 5) {
    // Prevent the default action to stop form submission
    event.preventDefault();

    // Select the <ul> element
    let ul = document.querySelector('.list-group.list-group-flush');

    // Create a new <li> element
    let li = document.createElement('li');

    // Add the 'list-group-item' class to the <li>
    li.classList.add('list-group-item');

    // Set the text content of the <li> to the value of the input
    li.textContent = input.value;

    // Append the <li> to the <ul>
    ul.appendChild(li);

    // Clear the input
    input.value = '';

    // Increment the counter
    count++;
  }
});