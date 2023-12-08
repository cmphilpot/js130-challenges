'use strict';

class Diamond {
  constructor () {

  }

  static makeDiamond (letter) {

  }
}

module.exports = Diamond;

/* notes:

input letter
width = height

*/

// console.log(Diamond.makeDiamond('A'));
// console.log(Diamond.makeDiamond('B'));
console.log(Diamond.makeDiamond('C'));
console.log(Diamond.makeDiamond('E'));



/* sloppy beginning


  static makeDiamond (letter) {
    let startCharCode = 'A'.charCodeAt(0);
    let endCharCode = letter.charCodeAt(0);
    let decrementingNumberOfSpaces = endCharCode - startCharCode;
    let numberOfIterations = (decrementingNumberOfSpaces * 2) + 1;
    let incrementingNumberOfSpaces = 1;
    let finalDisplay = ``;
    let temp;

    for (let index = 0; index < (numberOfIterations / 2); index += 1) {
      temp += ' '.repeat(decrementingNumberOfSpaces) + String.fromCharCode(startCharCode);
      if (index === 0) {
        temp += `\n`;
        continue;
      }
      temp += ' '.repeat(incrementingNumberOfSpaces) + String.fromCharCode(startCharCode) + `\n`;
      finalDisplay += temp;
      temp = '';
      decrementingNumberOfSpaces -= 1;
      incrementingNumberOfSpaces += 1;
      startCharCode += 1;
    }
    console.log(finalDisplay);
  }

*/
