const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, "noma");

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 4 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 0);
assertEqual(result2, undefined);