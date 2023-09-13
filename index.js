// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;




function charConcat(string){

return [...string.slice(0,string.length/2)].map((val,idx)=>val+string[string.length-1-idx]+(++idx)).join("");

}

console.log(charConcat("cyril"));


