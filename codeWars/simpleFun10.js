function rangeBitCount(a, b) {
  let chaine = '';

  for (let i = a; i <= b; i++) {
    chaine += (i >>> 0).toString(2);
  }
  const occurences = chaine.match(/1/g);
  console.log(occurences ? occurences.length : 0);
}

rangeBitCount(2, 7);
