// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// function reverse(str) {
//   let revStr = '';
//   for (let i = 0; i < str.length; i++) {
//     revStr = str[i] + revStr;
//   }
//   return revStr;
// }

// function reverse(str) {
//   let revStr = '';
//   for (character of str) {
//     revStr = character + revStr;
//   }
//   return revStr;
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
