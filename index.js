// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function areYouPlayingBanjo(name) {
  // Implement me
  return name.toUpperCase().substring(0,1)==="R"?name+" plays banjo":name+" does not play banjo";
}

function areYouPlayingBanjoSoluce(name) {
  
  return name +(name[0].toLowerCase()==='r'?" plays ":" does not play ")+" banjo";
}

console.log(areYouPlayingBanjoSoluce("robert"));
