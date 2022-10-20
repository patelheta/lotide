const eqArrays = function (actualArrays, expectedArrays) {
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

const assertArraysEqual = function (actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let items of source) {
    if (!itemsToRemove.includes(items)) {
      newArray.push(items);
    }
  }
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without([1, 2, 1, 4, 3, 6], [3, 1]), [2, 4, 6]);
assertArraysEqual(without(["1", "2", "3"], ["1", "2"]), ["3"]);
