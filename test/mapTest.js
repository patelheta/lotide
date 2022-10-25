const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => should PASS

const numbers = [1, 2, 3, 4];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8]);


const words1 = ["gr", "co", "to", "ma", "tm"];
const results3 = map(words1, word => word + word);
assertArraysEqual(results3, ['grgr', 'coco', 'toto', 'mama', 'tmtm']); // => should PASS