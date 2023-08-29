// Import stylesheets
import './style.css';
import { Guitar, Mandoline } from './guitar.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//------------------- CLASS

let guitar = new Mandoline('PRS', 12);
console.log(guitar);
console.log(guitar.getCordes());
