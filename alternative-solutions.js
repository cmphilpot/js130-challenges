'use strict';

class Series {
 constructor () {

 }
 method () {

 }
}

module.exports = Series;



/* Series

'use strict';

class Series {
 constructor (stringInput) {
  this.string = stringInput;
 }

 lengthOfInputString () {
  return this.string.length;
 }

 slices(lengthOfSubstring) {
  if (lengthOfSubstring > this.lengthOfInputString()) {
    throw new Error('Sorry, cannot check for a substring length longer than the string itself');
  };

  let listOfSubstrings = [];
  let chunk;

  for (let index = 0; index <= this.lengthOfInputString() - lengthOfSubstring; index += 1) {
    chunk = this.string.slice(index, (index + lengthOfSubstring));
      listOfSubstrings.push(chunk);
  }

  return listOfSubstrings.map(string => string.split('').map(digit => Number(digit)));
 }
}

module.exports = Series;
*/

/* improper first Series attempt

'use strict';

class Series {
 constructor (stringInput) {
  this.string = stringInput;
 }

 lengthOfInputString () {
  return this.string.length;
 }

 slices(lengthOfSubstring) {
  if (lengthOfSubstring > this.lengthOfInputString()) {
    throw new Error('Sorry, cannot check for a substring length longer than the string itself');
  };

  let listOfSubstrings = [];
  let chunk;

  for (let index = 0; index <= this.lengthOfInputString() - lengthOfSubstring; index += 1) {
    chunk = this.string.slice(index, (index + lengthOfSubstring));
      if (this.strictlyAscending(chunk)) {
        listOfSubstrings.push(chunk);
      }
  }

  return listOfSubstrings.map(string => string.split('').map(digit => Number(digit)));
 }

 strictlyAscending (substring) {
  return substring.split('').every((el, idx, array) => {
    if (idx === 0) return true;
    return Number(el) > Number(array[idx - 1]);
  });
 }
}

module.exports = Series;


*/

/* SumOfMultiples red-do

'use strict';

class SumOfMultiples {
  constructor (...numberList) {
    this.numberList = numberList.length ? [...numberList] : [3, 5];
  }

  static to (number) {
    return new SumOfMultiples().to(number);
  }

  to (number) {
    return this.getMultiples(number).reduce((acc, curr) => acc += curr, 0)
  }

  getMultiples (number) {
    let list = [];

    for (let index = 0; index < number; index += 1) {
      if (this.numberList.some(el => index % el === 0)) {
        list.push(index);
      }
    }
    return list;
  }
}

module.exports = SumOfMultiples;


// let obj = new SumOfMultiples(3, 5);
// console.log(obj.to(20)); // 51

// let obj = new SumOfMultiples(7, 13, 17);
// console.log(obj.to(20)); // 51

let obj2 = SumOfMultiples.to(1000);
console.log(obj2); // 233_168



*/

/* Octal re-do


class Octal {
  constructor (stringInput) {
    this.number = stringInput;
  }

  _isValidInput(input) {
    let validDigits = '01234567';
    let arrOfInput = input.split('');

    return arrOfInput.every(digit => validDigits.includes(digit));
  }

  toDecimal () {
    if (!this._isValidInput(this.number)) return 0;

    return String(this.number).split('').reverse().reduce((acc, curr, idx) => {
      return acc + (curr * (8 ** idx))
    }, 0)
  }
}

module.exports = Octal;

let one = new Octal('1');
console.log(one.toDecimal());

let eight = new Octal('8');
console.log(eight.toDecimal());

let invalid = new Octal('abc')
console.log(invalid.toDecimal());

let ten = new Octal('10');
console.log(ten.toDecimal()); // 8

let eleven = new Octal('11');
console.log(eleven.toDecimal()); // 9

let seventeen = new Octal('17');
console.log(seventeen.toDecimal()); // 15
*/

/* PerfectNumber re-do

// A sum = sum of positive divisors
// Perfect: A sum equal to original number.
// Abundant: A sum greater than original number.
// Deficient: A sum less than original number.

'use strict';

class PerfectNumber {
  static getDivisors (number) {
    let divisors = [];

    for (let counter = 0; counter < number; counter += 1) {
      if (number % counter === 0) divisors.push(counter);
    }

    return divisors;
  }

  static classify (number) {
    if (number <= 0) throw new Error('A number greater 0 is expected');

    let divisors = this.getDivisors(number);
    let aliquotSum = divisors.reduce((acc, curr) => acc += curr, 0);

    if (aliquotSum === number) return 'perfect';

    return aliquotSum > number ? 'abundant' : 'deficient';
  }
}

module.exports = PerfectNumber;

*/
/* Scrabble re-do

'use strict';

class Scrabble {
  constructor (word) {
    this.word = word ? word.trim() : '';
  }

  static LETTER_VALUES = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  }

  static score (word) {
    return new Scrabble(word).score();
  }

  score () {
    let upperCaseLetters = this.word.toUpperCase().split('');

    return upperCaseLetters.reduce((acc, curr) => {
      for (let prop in Scrabble.LETTER_VALUES) {
        if (Scrabble.LETTER_VALUES[prop].includes(curr)) {
          return acc += (Number(prop));
        }
      }
      return acc;
    }, 0);
  }
}

module.exports = Scrabble;



*/

/* Anagrams re-do

'use strict';

class Anagram {
  constructor (word) {
    this.word = this.makeLowerCase(word);
  }

  makeLowerCase (letterOrWord) {
    return letterOrWord.toLowerCase();
  }

  makeArray (word) {
    return word.split('');
  }

  size () {
    return this.makeArray(this.word).length;
  }

  match (array) {
    array = array.filter(word => (word.length === this.size())
    && (this.makeLowerCase(word) !== this.word));
    let anagrams = [];

    array.forEach((word) => {
      let lettersSorted = [...word].sort();

      if (lettersSorted.every(letter => this.word
        .includes(this.makeLowerCase(letter)))) {
        anagrams.push(word);
      }
    });

    return anagrams.filter(word => [...this.makeLowerCase(word)]
      .sort().join('') === this.word.split('').sort().join(''));
  }
}

module.exports = Anagram;

*/

/* RomanNumeral re-do

'use strict';

class RomanNumeral {
  constructor (number) {
    this.number = number;
  }

  static ones = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 0: '',
  }

  static tens = {
    1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', 0: '',
  }

  static hundreds = {
    1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', 0: '',
  }

  static thousands = {
    1: 'M', 2: 'MM', 3: 'MMM'
  }


  arrayOfDigitsReversed() {
    return this.number.toString().split('').reverse();
  }

  size () {
    return this.arrayOfDigitsReversed().length;
  }

  toRoman () {
    let final = '';
    let digits = this.arrayOfDigitsReversed();

    for (let index = 0; index < this.size(); index += 1) {
      if (index === 0) final += RomanNumeral.ones[digits[index]];
      if (index === 1) final = RomanNumeral.tens[digits[index]] + final;
      if (index === 2) final = RomanNumeral.hundreds[digits[index]] + final;
      if (index === 3) final = RomanNumeral.thousands[digits[index]] + final;
    }
    return final;
  }
}

module.exports = RomanNumeral;

*/

/* DNA re-do (Point Mutations)

'use strict';

class DNA {
  constructor (strand) {
    this.copyOfStrand = strand.slice();
  }

  hammingDistance (strandToCompare) {
    let [shorter, longer] = [this.copyOfStrand, strandToCompare]
      .sort((a, b) => a.length - b.length);

    [shorter, longer].map(el => el.slice(0, (shorter.length)));

    return [...shorter].reduce((acc, curr, idx) => {
      if (longer[idx] !== curr) {
        return acc += 1;
      } else {
        return acc;
      }
    }, 0);
  }
}

module.exports = DNA;

// Tests
// let dna = new DNA('AAACTAGGGG');
// console.log(dna.hammingDistance('AGGCTAGCGGTAGGAC')); // 3

// let dna1 = new DNA('GACTACGGACAGGGTAGGGAAT');
// console.log(dna1.hammingDistance('GACATCGCACACC')); // 5
*/


/* Triangle re-do


// program to determine triangle type:

// equilateral: all sides same length
// isosceles: exactly two sides same length
// A scalene: all sides different lengths

// all sides must be of length > 0
// sum of the lengths of any two sides must be greater than the length of the third side.

// Triangle.kind

'use strict';

class Triangle {
  constructor (side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.allSidesSorted = [this.side1, this.side2, this.side3]
      .sort((a, b) => a - b);
    let [first, second, third] = this.allSidesSorted;


    // the following block makes sure all sides have a valid length > 0 and that
    // each combination of two sides is greater than their third side, otherwise an error is thrown


    if (
      (this.allSidesSorted[0] === 0) ||
      ((first + second) <= third) ||
      ((first + third) <= second) ||
      ((second + third) <= first)
    ) {
      throw new Error('Triangle is not valid');
    }
  }

  kind () {
    if (this.allSidesSorted.every(sideLength => sideLength === this.allSidesSorted[0])) return 'equilateral';
    let numberOfUniques = Array.from(new Set(this.allSidesSorted)).length;
    return numberOfUniques === 2 ? 'isosceles' : 'scalene';
  }
}

module.exports = Triangle;



Tests
// let equil = new Triangle(3, 3, 3);
// let scalene = new Triangle(2, 3, 4);
// let iso = new Triangle(3, 3, 5);

// // let firstError = new Triangle(3, 3, 0);


// console.log(equil.kind());       // equi
// console.log(scalene.kind());     // scalene
// console.log(iso.kind());         // iso

// console.log(firstError.kind());

*/
