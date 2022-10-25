const findKeyByValue = function(allRecords, value) {
  for (let key in allRecords) {
    if (allRecords[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;