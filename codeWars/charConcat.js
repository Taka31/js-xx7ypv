const charConcat2 = string =>
  [...string.slice(0, string.length / 2)].map((val, idx) => val + string[string.length - idx - 1] + ++idx).join(``);



console.log(charConcat("abc!def"))