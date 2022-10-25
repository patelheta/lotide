const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for [5,6,7].length", () => {
    assert.deepEqual(tail([5, 6, 7]).length, 2);
  });
  it("returns 0 for [1].length", () => {
    assert.deepEqual(tail([1]).length, 0);
  });
  it("returns 0 for [].length", () => {
    assert.deepEqual(tail([]).length, 0);
  });
});