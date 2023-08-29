function swapAdjacentBits(n) {
  let binary =    n.toString(2).length % 2 === 0 ? n.toString(2) : 0 + n.toString(2);
  let finalResult = '';

  for (let i = 0; i < binary.length; i += 2) {
    finalResult += binary[i + 1] + binary[i];
  }

  return parseInt(finalResult, 2);
}

swapAdjacentBits(1);
