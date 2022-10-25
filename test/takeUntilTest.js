const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expectedData = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, expectedData);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expectedData2 = ["I've", 'been', 'to', 'Hollywood'];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, expectedData2);

