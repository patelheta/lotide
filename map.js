
// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// };

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(actualArrays, expectedArrays) {
  if (actualArrays.length !== expectedArrays.length) {
    return false;
  }
  if (actualArrays.length === 0) {
    return true;
  }
  for (let i = 0; i < expectedArrays.length; i++) {
    if (actualArrays[i] !== expectedArrays[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => should PASS

const numbers = [1, 2, 3, 4];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8]);


const words1 = ["gr", "co", "to", "ma", "tm"];
const results3 = map(words1, word => word + word);
assertArraysEqual(results3, ['grgr', 'coco', 'toto', 'mama', 'tmtm']); // => should PASS