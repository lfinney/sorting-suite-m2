var { assert } = require('chai');
const mergeSort = require('../scripts/mergeSort');
const genRandomNumberArray = require('../scripts/rng');
const genRandomLettersArray = require('../scripts/rlg');

describe('MergeSort test', () => {
  it('should be a function', () => {
    let shortArray = [3]
    mergeSort(shortArray);
    assert.isFunction(mergeSort);
  });

  it('should re-order an array of numbers from least to greast', () => {
    let shortArray = [3, 2, 4, 1]
    let sortedArray = mergeSort(shortArray);
    assert.deepEqual(sortedArray, [1, 2, 3, 4])
  });

  it('should re-order a short array of numbers from least to greatest with negative numbers', () => {
    let shortArray = [3, 2, -4, 1]
    let sortedArray = mergeSort(shortArray);
    assert.deepEqual(sortedArray, [-4, 1, 2, 3])
  });

  it('should re-order a short array of letters into alphabetical order', () => {
    let shortArray = ["d", "b", "a", "c"]
    let sortedArray = mergeSort(shortArray);
    assert.deepEqual(sortedArray, ["a", "b", "c", "d"])
  });

  it('should re-order an array of letters into alphabetical order', () => {
    let shortArray = ["d", "b", "a", "c"]
    let sortedArray = mergeSort(shortArray);
    assert.deepEqual(sortedArray, ["a", "b", "c", "d"])
  });

  it('should re-order a large array of randomly generated numbers from least to greatest as tested by array.prototype.sort()', () => {
    let randomArray = genRandomNumberArray(10)
    let sortedArray = mergeSort(randomArray);
    assert.deepEqual(sortedArray, randomArray.sort( (a, b) => {
      return a - b;
    }));
  });

  it('should re-order a large array of randomly generated numbers from least to greatest as tested by a for loop', () => {
    let randomArray = genRandomNumberArray(10)
    let sortedArray = mergeSort(randomArray);
    for(var i = 0; i < sortedArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i+1])
    }
  });

  it('should re-order a large array of randomly generated letters in alphabetical order as tested by array.prototype.sort()', () => {
    let randomArray = genRandomLettersArray(10)
    mergeSort(randomArray);
    assert.deepEqual(randomArray, randomArray.sort( (a, b) => {
      return a - b;
    }));
  });

  it('should re-order a large array of randomly generated letters in alphabetical order as tested by a for loop', () => {
    let randomArray = genRandomLettersArray(10)
    let sortedArray = mergeSort(randomArray);
    for(var i = 0; i < sortedArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i+1])
    }
  });

  it('should re-order an extremely large array of randomly generated numbers from least to greatest as tested by a for loop', () => {
    let randomArray = genRandomNumberArray(100000)
  let sortedArray = mergeSort(randomArray);    for(var i = 0; i < randomArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i+1])
    }
  });
});
