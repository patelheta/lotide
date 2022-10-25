# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @patelheta-385/lotide`

**Require it:**

`const _ = require('@patelheta-385/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(actual, expected)`: function that asserts if two arrays are equals
- `assertEqual(actual, expected)`: function that asserts if two values are equals
- `assertObjectsEqual(actual, expected)`: function that asserts if two objects are equals
- `countLetters(string)`: function that returns counts of each letter of a string
- `countOnly(allItems, itemsToCount)`: function that takes items and returns counts for a specific subset of those items
- `eqArrays(actualArrays, expectedArrays)`: function that compares two arrays
- `eqObjects(object1, object2)`: function that compares two objects
- `findKey(allRecords, callback)`: function that scans the object and return the first key for which the callback returns a truthy value
- `findKeyByValue(allRecords, value)`: function that searches for a key on an object where its value matches a given value
- `head(array)`: function that retrieves the first element from the array
- `index`: list of all the functions in an object
- `letterPositions(sentence)`: function that returns all the index in the string where each character is found
- `map(array, callback)`: function that creates a new array with the results of calling a provided function on every element in the calling array
- `middle(array)`: function that returns the middle element of an array
- `tail(array)`: function that retrieves every element except the head (first element) of the array
- `takeUntil(array, callback)`: function that returns a slice of the array with elements taken from the beginning
- `without(allItems, itemsToRemove)`: function that removes elements from an array
