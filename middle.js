const middle = function(middleArray) {
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

module.exports = middle;
