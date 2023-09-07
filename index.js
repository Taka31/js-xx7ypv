// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function findNeedle(haystack) {
 

  return "found the needle at position "+ haystack.indexOf("needle")

}

console.log(findNeedle(["test","titi","needle"]))

