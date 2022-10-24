const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5, 6, 7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);
assertEqual(tail([1, 3, 4, 5, 6, 7, 8, 9]).length, 7);
assertEqual(tail([true, false]).length, 1);
