function genRandomNumberArray(count) {
  let numbers = [];
  let max = 1000;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * max);

    numbers.push(randomNumber);
  }

  return numbers;
}

let randomArray = genRandomNumberArray(5000);

module.exports = genRandomNumberArray;
