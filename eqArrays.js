const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
