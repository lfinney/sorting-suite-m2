function genRandomLettersArray(count) {
  let letters = [];

  let allLetters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < count; i++) {
    let randomLetterNumber = Math.floor( Math.random() * 25 );

    letters.push( allLetters[randomLetterNumber] );
  }

  return letters;
}

let randomLetters = genRandomLettersArray(500);

module.exports = genRandomLettersArray;
