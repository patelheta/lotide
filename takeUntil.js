const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
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





