var { assert } = require('chai');
const insertionSort = require('../scripts/insertionSort');
const genRandomNumberArray = require('../scripts/rng');
const genRandomLettersArray = require('../scripts/rlg');

describe('InsertionSort Test', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should re-order an array of numbers from least to greast', () => {
    let shortArray = [3, 2, 4, 1]
    insertionSort(shortArray);
    assert.deepEqual(shortArray, [1, 2, 3, 4])
  });

  it('should re-order a short array of numbers from least to greatest with negative numbers', () => {
    let shortArray = [3, 2, -4, 1]
    insertionSort(shortArray);
    assert.deepEqual(shortArray, [-4, 1, 2, 3])
  });

  it('should re-order a short array of letters into alphabetical order', () => {
    let shortArray = ["d", "b", "a", "c"]
    insertionSort(shortArray);
    assert.deepEqual(shortArray, ["a", "b", "c", "d"])
  });

  it('should re-order an array of letters into alphabetical order', () => {
    let shortArray = ["d", "b", "a", "c"]
    insertionSort(shortArray);
    assert.deepEqual(shortArray, ["a", "b", "c", "d"])
  });

  it('should re-order a large array of randomly generated numbers from least to greatest as tested by array.prototype.sort()', () => {
    let randomArray = genRandomNumberArray(10)
    insertionSort(randomArray);
    assert.deepEqual(randomArray, randomArray.sort( (a, b) => {
      return a - b;
    }));
  });

  it('should re-order a large array of randomly generated numbers from least to greatest as tested by a for loop', () => {
    let randomArray = genRandomNumberArray(10)
    insertionSort(randomArray);
    for(var i = 0; i < randomArray.length - 1; i ++) {
      assert.isAtMost(randomArray[i], randomArray[i+1])
    }
  });

  it('should re-order a large array of randomly generated letters in alphabetical order as tested by array.prototype.sort()', () => {
    let randomArray = genRandomLettersArray(10)
    insertionSort(randomArray);
    assert.deepEqual(randomArray, randomArray.sort( (a, b) => {
      return a - b;
    }));
  });

  it('should re-order a large array of randomly generated letters in alphabetical order as tested by a for loop', () => {
    let randomArray = genRandomLettersArray(10)
    insertionSort(randomArray);
    for(var i = 0; i < randomArray.length - 1; i ++) {
      assert.isAtMost(randomArray[i], randomArray[i+1])
    }
  });

  it('should re-order an extremely large array of randomly generated numbers from least to greatest as tested by a for loop', () => {
    let randomArray = genRandomNumberArray(10000)
    insertionSort(randomArray);
    for(var i = 0; i < randomArray.length - 1; i ++) {
      assert.isAtMost(randomArray[i], randomArray[i+1])
    }
  });
});
