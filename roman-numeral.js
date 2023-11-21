class RomanNumeral {
  constructor (number) {
    this.number = number;
  }

  static ones = {
    1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
    6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 0: ''
  }

  static tens = {
    1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L',
    6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', 0: ''
  }

  static hundreds = {
    1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D',
    6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', 0: ''
  }

  static thousands = {
    1: 'M', 2: 'MM', 3: 'MMM', 0: ''
  }

  toRoman() {
    const LEN = String(this.number).length;
    let arrayOfDigitsReversed = Array.from(String(this.number)).reverse();
    let finalString = '';

    for (let index = 0; index < LEN; index += 1) {
      if (arrayOfDigitsReversed[index] == 0) continue;
      if (index === 0) finalString += RomanNumeral.ones[arrayOfDigitsReversed[index]];
      if (index === 1) finalString = RomanNumeral.tens[arrayOfDigitsReversed[index]] + finalString;
      if (index === 2) finalString = RomanNumeral.hundreds[arrayOfDigitsReversed[index]] + finalString;
      if (index === 3) finalString = RomanNumeral.thousands[arrayOfDigitsReversed[index]] + finalString;
    }

    return finalString;
  }
  
};




module.exports = RomanNumeral;

/* test suite

let one = new RomanNumeral(1);
console.log(one.toRoman());      //   'I'

let two = new RomanNumeral(2);
console.log(two.toRoman());      //   'II'

let three = new RomanNumeral(3);
console.log(three.toRoman());    //   'III'

let four = new RomanNumeral(4);
console.log(four.toRoman());     //   'IV'

let five = new RomanNumeral(5);
console.log(five.toRoman());     //   'V'

let seven = new RomanNumeral(6);
console.log(seven.toRoman());    //   'VI'

let eight = new RomanNumeral(9);
console.log(eight.toRoman());    //   'IX'

let nine = new RomanNumeral(27);
console.log(nine.toRoman());     //   'XXVII'

let ten = new RomanNumeral(48);
console.log(ten.toRoman());      //   'XLVIII'

let eleven = new RomanNumeral(59);
console.log(eleven.toRoman());   //   'LIX'

let twelve = new RomanNumeral(93);
console.log(twelve.toRoman());   //   'XCIII'

let thirteen = new RomanNumeral(141);
console.log(thirteen.toRoman()); //   'CXLI'

let fourteen = new RomanNumeral(163);
console.log(fourteen.toRoman()); //   'CLXIII'

let fifteen = new RomanNumeral(402);
console.log(fifteen.toRoman());  //   'CDII'

let sixteen = new RomanNumeral(575);
console.log(sixteen.toRoman());  //   'DLXXV'

let seventeen = new RomanNumeral(911);
console.log(seventeen.toRoman());//   'CMXI'

let eighteen = new RomanNumeral(1024);
console.log(eighteen.toRoman()); //   'MXXIV'

let nineteen = new RomanNumeral(3000);
console.log(nineteen.toRoman()); //   'MMM'

let twenty = new RomanNumeral(44);
console.log(twenty.toRoman());   //   'XLIV'

let twentyOne = new RomanNumeral(99);
console.log(twentyOne.toRoman()); //  'XCIX'



*/

/*

let twentyTwo = new RomanNumber(4994);
console.log(twentyTwo.toRoman()); // ''

let twentyThree = new RomanNumber(9449);
console.log(twentyThree.toRoman()); // ''

*/
