// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const maps = [{}, {}];
  let isAnagram = true;

  function anagramMapper(string, map) {
    for (let char of string.toLowerCase()) {
      if (!map[char]) map[char] = 1;
      else map[char]++;
    }
  }

  Array.from(arguments).forEach((arg, i) => {
    anagramMapper(arg, maps[i]);
  });

  const [aMap, bMap] = maps;git remot

  for (char in aMap) {
    if (aMap[char] !== bMap[char]) isAnagram = false;
  }

  return isAnagram;
}

module.exports = anagrams;
