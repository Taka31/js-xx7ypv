const rps = (p1, p2) => {
  var combi = {
    scissors: (d) => {
      return d === p1 ? 0 : d === 'paper' ? 1 : 2;
    },
    paper: (d) => {
      return d === p1 ? 0 : d === 'rock' ? 1 : 2;
    },
    rock: (d) => {
      return d === p1 ? 0 : d === 'scissors' ? 1 : 2;
    },
  };

  const num = combi[p1](p2);

  return num === 0 ? 'Draw!' : `Player ${num} won!`;
};

console.log(rps('paper', 'scissors'));
