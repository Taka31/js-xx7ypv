function areYouPlayingBanjo(name) {
  // Implement me
  return name.toUpperCase().substring(0,1)==="R"?name+" plays banjo":name+" does not play banjo";
}

function areYouPlayingBanjoSoluce(name) {
  
  return name +(name[0].toLowerCase()==='r'?" plays ":" does not play ")+" banjo";
}

console.log(areYouPlayingBanjoSoluce("robert"));