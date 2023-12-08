'use strict';

class Robot {
  static arrayOfNames = [];
  static lettersInName = 2;
  static numbersInName = 3;
  static DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  static CHARS_UPPERCASED = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
  ];

  static getRandomArbitrary (collection) {
    const LEN = collection.length;
    let min = 0;
    let max = LEN;

    return Math.floor(Math.random() * ((max - min) + min));
  }

  static getTwoLetters () {
    return Array.from({length: Robot.lettersInName}, () => {
      return Robot.CHARS_UPPERCASED[Robot
        .getRandomArbitrary(Robot.CHARS_UPPERCASED)];
    }).join('');
  }

  static getThreeDigits () {
    return Array.from({length: Robot.numbersInName}, () => {
      return Robot.DIGITS[Robot.getRandomArbitrary(Robot.DIGITS)];
    }).join('');
  }

  static remove (nameToRemove) {
    let index = Robot.arrayOfNames.indexOf(nameToRemove);
    if (index !== -1) {
      Robot.arrayOfNames.splice(index, 1);
    }
  }

  name () {
    if (this.robotName) return this.robotName;
    this.robotName = Robot.getTwoLetters() + Robot.getThreeDigits();

    if (Robot.arrayOfNames.includes(this.robotName)) this.name();
    Robot.arrayOfNames.push(this.robotName);

    return this.robotName;
  }

  reset () {
    Robot.remove(this.robotName);
    this.robotName = null;
  }
}

module.exports = Robot;

/*
no input
return a string
2 uppercase alphabetic then three digits.

 */

// let test = new Robot();
// console.log(test.name());
// console.log(test.name());

// let test2 = new Robot();
// test2.name();

// console.log(Robot.arrayOfNames);
// test2.reset();
// test.reset();

// console.log(Robot.arrayOfNames);
/*

  static getTwoLetters () {
    let letters = '';
    letters += Robot.CHARS_UPPERCASED[Robot
      .getRandomArbitrary(Robot.CHARS_UPPERCASED)];
    letters += Robot.CHARS_UPPERCASED[Robot
      .getRandomArbitrary(Robot.CHARS_UPPERCASED)];

    return letters;
  }

  static getThreeDigits () {
    let digits = '';

    digits += Robot.DIGITS[Robot.getRandomArbitrary(Robot.DIGITS)];
    digits += Robot.DIGITS[Robot.getRandomArbitrary(Robot.DIGITS)];
    digits += Robot.DIGITS[Robot.getRandomArbitrary(Robot.DIGITS)];

    return digits;
  }


*/
