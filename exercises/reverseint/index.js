// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// function reverseInt(n) {
//   let string = n.toString();
//   if (string.charAt(0) === '-') {
//     return parseInt('-' + reverse(string.slice(1)));
//   }
//   return parseInt(reverse(string));
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed, 10) * Math.sign(n);
}

module.exports = reverseInt;
