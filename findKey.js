const findKey = function(allRecords, callback) {
  for (let key in allRecords) {
    if (callback(allRecords[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
