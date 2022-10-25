const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without([1, 2, 1, 4, 3, 6], [3, 1]), [2, 4, 6]);
assertArraysEqual(without(["1", "2", "3"], ["1", "2"]), ["3"]);
