const countLetters = function(sentence) {
  const results = {};
  for (const char of sentence) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

// assertEqual(countLetters("Jason"), { J: 1, a: 1, s: 1, o: 1, n: 1 });
