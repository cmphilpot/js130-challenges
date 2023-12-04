/*
'equilateral': all three sides same length
'isosceles':  exactly two sides of same length
'scalene':  all sides of different lengths.

validTriangle
-  all sides must be of length > 0
-  sum of lengths of any two sides must be > length of third side

method: .kind

input: 3 numbers
output: string 'equilateral' 'isoscelese' 'scalene'
*/
'use strict';

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sortedSidesArray = [side1, side2, side3].sort((a, b) => a - b);

    if (this._isInvalid()) {
      throw new Error('Invalide triangle lengths');
    }
  }

  _isInvalid() { // _ in name indicates "private" method

    return (this.sortedSidesArray[0] <= 0) || ((this.sortedSidesArray[0] + this.sortedSidesArray[1]) <= this.sortedSidesArray[2]) ||
      ((this.sortedSidesArray[1] + this.sortedSidesArray[2]) <= this.sortedSidesArray[0]) ||
      ((this.sortedSidesArray[0] + this.sortedSidesArray[2]) <= this.sortedSidesArray[1]);
  }

  kind() {
    this._isInvalid();

    if ((this.side1 === this.side2) && (this.side2 === this.side3)) return 'equilateral';
    if ((this.sortedSidesArray[0] === this.sortedSidesArray[1]) || (this.sortedSidesArray[1] === this.sortedSidesArray[2])) return 'isosceles';

    return 'scalene';
  }
}

module.exports = Triangle;

// let isosceles = new Triangle(4, 3, 4);
// console.log(isosceles.kind()); // 'isosceles'

/*
let equilateral = new Triangle(2, 2, 2);
console.log(equilateral.kind()); // 'equilateral'

let isosceles = new Triangle(3, 4, 4);
console.log(isosceles.kind()); // 'isosceles'

let scalene = new Triangle(3, 4, 5);
console.log(scalene.kind()); // 'scalene'

let invalid1 = new Triangle(0, 2, 2); //  all sides must be of length > 0
console.log(invalid1.kind()); // 'scalene'

let invalid2 = new Triangle(1, 2, 4); // sum of lengths of any two sides must be > length of third side
console.log(invalid2.kind()); // 'scalene'
*/
