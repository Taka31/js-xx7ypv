//https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript

function goodDay(day, number) {
  console.log(
    (day === 'Monday' && number === 12) ||
      (day === 'Tuesday' && number > 95) ||
      (day === 'Wednesday' && number === 34) ||
      (day === 'Thursday' && number === 0) ||
      (day === 'Friday' && number % 2 === 0) ||
      (day === 'Saturday' && number === 56) ||
      (day === 'Sunday' && (number === 666 || number === -666))
  );
}

goodDay('Friday', 22221);

var AmIAfraid = function (day, num) {
  var preds = {
    Sunday: (d) => d == 666 || d == -666,
    Monday: (d) => d == 12,
    Tuesday: (d) => d > 95,
    Wednesday: (d) => d == 34,
    Thursday: (d) => d === 0,
    Friday: (d) => d % 2 === 0,
    Saturday: (d) => d == 56,
  };
  return preds[day](num);
};
