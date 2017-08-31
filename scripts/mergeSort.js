const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

let merge = (left, right) => {
  var sortedArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  sortedArray.push(...left, ...right);

  return sortedArray;
};

module.exports = mergeSort;
