// Import stylesheets
import './style.css';
import { Groupe } from './proto.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

Groupe.prototype.setName = (newName) => {
  groupName = newName;
};
Groupe.prototype.MembersCount = 5;

let groupe = new Groupe('Dyouk');
document.write(groupe.getName() + '<br>');
document.write(groupe.setName('Rolling Stones') + '<br>');
document.write(groupe.getName() + '<br>');
document.write(groupe.MembersCount);
