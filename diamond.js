'use strict';

class Diamond {
  static makeDiamond (letter) {
    let final = '';

    final += Diamond.topHalf(letter);
    final += Diamond.bottomHalf(letter);

    return final;
  }

  static startCharCode = 'A'.charCodeAt(0);
  static topHalf (letter) {
    let endCharCode = letter.charCodeAt(0);
    let numberOfChars = letter.charCodeAt(0) - Diamond.startCharCode + 1;
    let externalSpaces = numberOfChars - 1;
    let internalSpaces = 1;
    let topHalf = '';
    let currentChar;

    for (let index = Diamond.startCharCode; index <= endCharCode; index += 1) {
      currentChar = String.fromCharCode(index);
      if (index === Diamond.startCharCode) {
        topHalf += ' '.repeat(externalSpaces) + currentChar + ' '.repeat(externalSpaces) + '\n';
        externalSpaces -= 1;
        continue;
      }
      topHalf += ' '.repeat(externalSpaces) + currentChar + ' '.repeat(internalSpaces) + currentChar + ' '.repeat(externalSpaces) + '\n';
      internalSpaces += 2;
      externalSpaces -= 1;
    }

    return topHalf;
  }

  static bottomHalf (letter) {
    let endCharCode = letter.charCodeAt(0);
    let numberOfChars = letter.charCodeAt(0) - Diamond.startCharCode + 1;
    let externalSpaces = 1;
    let internalSpaces = (numberOfChars * 2) - 5;
    let bottomHalf = '';
    let currentChar;

    for (let index = endCharCode - 1; index >= Diamond.startCharCode; index -= 1) {
      currentChar = String.fromCharCode(index);

      if (index === Diamond.startCharCode) {
        bottomHalf += ' '.repeat(externalSpaces) + currentChar + ' '.repeat(externalSpaces) + '\n';
        externalSpaces += 1;
        continue;
      }

      bottomHalf += ' '.repeat(externalSpaces) + currentChar + ' '.repeat(internalSpaces) + currentChar + ' '.repeat(externalSpaces) + '\n';
      externalSpaces += 1;
      internalSpaces -= 2;
    }

    return bottomHalf;
  }
}

module.exports = Diamond;

/* tests

console.log(Diamond.makeDiamond('A'));
console.log(Diamond.makeDiamond('B'));
console.log(Diamond.makeDiamond('C'));
console.log(Diamond.makeDiamond('E'));

*/

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
      temp += ' '.repeat(decrementingNumberOfSpaces) +
      String.fromCharCode(startCharCode);
      if (index === 0) {
        temp += `\n`;
        continue;
      }
      temp += ' '.repeat(incrementingNumberOfSpaces) +
      String.fromCharCode(startCharCode) + `\n`;
      finalDisplay += temp;
      temp = '';
      decrementingNumberOfSpaces -= 1;
      incrementingNumberOfSpaces += 1;
      startCharCode += 1;
    }
    console.log(finalDisplay);
  }

*/
