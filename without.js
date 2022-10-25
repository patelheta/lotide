const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let items of source) {
    if (!itemsToRemove.includes(items)) {
      newArray.push(items);
    }
  }
  return newArray;
};

module.exports = without;