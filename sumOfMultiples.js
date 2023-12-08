'use strict';

class SumOfMultiples {
  constructor (...setOfNumbers) {
    this.setOfNumbers = setOfNumbers;
  }

  to(number) {
    // less than number, sum All multiples
    let arrOfMultiples = this.setOfNumbers.map(element => this
      .getMultiples(element, number)).flat(1);

    return arrOfMultiples.reduce((acc, curr) => acc += curr, 0);
  }

  getMultiples(element, number) {
    let multiples = [];
    let incrementingElement = element;

    while (incrementingElement < number) {
      multiples.push(incrementingElement);
      incrementingElement += element;
    }

    return multiples;
  }

  static to(number) {
    let arr = SumOfMultiples.getMultiples(number);

    return arr.reduce((acc, curr) => acc += curr, 0);
  }

  static getMultiples(number) {
    let multiples = [];
    let counter = 1;

    while (counter < number) {
      if ((counter % 3 === 0) || (counter % 5 === 0)) {
        multiples.push(counter);
      }
      counter += 1;
    }

    return multiples;
  }
}

module.exports = SumOfMultiples;

/*
tests

"sum to one"
"sum to three"
"sum to ten"
"sum to one hundred"
"sum to one thousand"
"configurable 7 13 17 to 20" [7, 13, 17, 20]
"configurable 4 6 to 15" [4, 6, 15]
"configurable 5 6 8 to 150" [5, 6, 8]
"configurable 43 47 to 10,000" [43, 47]

SumOfMultiples.to(1); 0
SumOfMultiples.to(4); // 3
SumOfMultiples.to(10); // 23
SumOfMultiples.to(100); // 2_318
SumOfMultiples.to(1000); // 233_168


console.log(SumOfMultiples.to(1)); // 0
console.log(SumOfMultiples.to(4)); // 3
console.log(SumOfMultiples.to(10)); // 23
console.log(SumOfMultiples.to(100)); // 2_318
console.log(SumOfMultiples.to(1000)); // 233_168

let first = new SumOfMultiples(7, 13, 17);
console.log(first.to(20)); // 51

let second = new SumOfMultiples(4, 6);
console.log(second.to(15)); // 30

let third = new SumOfMultiples(5, 6, 8)
console.log(third.to(150)); // 4419

let fourth = new SumOfMultiples(43, 47)
console.log(fourth.to(10000)); // 2203160
*/
