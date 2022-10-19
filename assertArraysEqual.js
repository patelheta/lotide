const assertArrayEqual = function (actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

const eqArrays = function (actualArrays, expectedArrays) {
  if (actualArrays.length === expectedArrays.length) {
    let result = false;
    for (let i = 0; i < expectedArrays.length; i++) {
      if (actualArrays[i] === expectedArrays[i]) {
        result = true;
      } else {
        result = false;
      }
    }
    return result;
  } else {
    return false;
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);
