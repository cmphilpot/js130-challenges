class Octal {
  constructor (numberAsString) {
    this.numberAsString = numberAsString;
  }

  isValid () {
    return this.numberAsString.split('').every(digit => (digit >= 0) && (digit <= 7));
  }

  toDecimal () {
    if (!this.isValid()) return 0;

    let reversedArray = this.numberAsString.split('').reverse();

    return reversedArray.reduce((acc, curr, idx) => {
      return acc += curr * (8 ** idx)
    }, 0);
  }
};

module.exports = Octal;

/* tests

let one = new Octal('1');
console.log(one.toDecimal());          // 1

let ten = new Octal('10');
console.log(ten.toDecimal());          // 8

let seventeen = new Octal('17');
console.log(seventeen.toDecimal());    // 15

let eleven = new Octal('11');
console.log(eleven.toDecimal());       // 9

let oneThirty = new Octal('130');
console.log(oneThirty.toDecimal());          // 88

let twoThowFortySeven = new Octal('2047');
console.log(twoThowFortySeven.toDecimal());          // 1063

let fourSevens = new Octal('7777');
console.log(fourSevens.toDecimal());          // 4095

let bigUn = new Octal('1234567');
console.log(bigUn.toDecimal());          // 342391

let carrot = new Octal('carrot');
console.log(carrot.toDecimal());         // 0

let eight = new Octal('8');
console.log(eight.toDecimal());          // 0

let nine = new Octal('9');
console.log(nine.toDecimal());          // 0

let sixSevEightNine = new Octal('6789');
console.log(sixSevEightNine.toDecimal());          // 0

let letters = new Octal('abc1z');
console.log(letters.toDecimal());          // 0

let octal = new Octal('011');
console.log(octal.toDecimal());          // 9

let numsAndLetters = new Octal('234abc');
console.log(numsAndLetters.toDecimal());          // 0

*/
