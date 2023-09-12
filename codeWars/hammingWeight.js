function hammingWeight(x){
  var bin = [];
  while (x > 0) {
  bin.unshift(x % 2);
  x >>= 1;
  }

  return bin.length?bin.join('').match(/1/g).length:0;
}

console.log(hammingWeight(0))