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

const middle = function (middleArray) {
  let arrayLength = middleArray.length;
  if (middleArray.length === 1 || middleArray.length === 2) {
    return [];
  } else if (middleArray.length % 2 !== 0) {
    let mid = Math.floor(arrayLength / 2);
    return [middleArray[mid]];
  } else if (middleArray.length % 2 === 0) {
    let mid = arrayLength / 2;
    return [middleArray[mid], middleArray[mid - 1]];
  }
};

assertArraysEqual(middle([1, 2]), []); // => should PASS
