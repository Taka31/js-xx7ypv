// Import stylesheets
import './style.css';
import { Groupe } from './proto.js';
import { Guitar } from './guitar.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


//------------------- PROTO

Groupe.prototype.MembersCount = 5;

let groupe = new Groupe('Dyouk');
document.write(groupe.getName() + '<br>');
document.write(groupe.MembersCount);

//------------------- Class

let guitar = new Guitar("PRS");
document.write("<Br>"+guitar.getBrand());
