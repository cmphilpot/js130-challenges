'use strict';

/*
combinedArray.indexOf(element) === combinedArray.lastIndexOf(element));
  return returnVal.filter((el, idx, arr) => arr.indexOf(el) === idx);

     this.filteredForUniques = array.filter((element, idx, arr) => arr.indexOf(element));
    console.log(this.set);
*/

class CustomSet {
  constructor (array) {
    this.LEN = Array.isArray(array) ? array.length : 0;
    this.array = array;
    // this.filteredForUniques = array.filter((element, idx, arr) => arr.indexOf(element));
    console.log(this.set);
  }

  isEmpty() {
    return this.LEN === 0;
  }

  contains (number) {
    if (this.isEmpty()) return false;
    return this.array.includes(number);
  }

  isSubset(newObject) {
    if (this.isEmpty() && newObject.isEmpty()) return true;
    if (this.isEmpty() && !newObject.isEmpty()) return true;
    if (!this.isEmpty() && newObject.isEmpty()) return false;
    if (newObject.array.every(el => this.array.includes(el))) return true;
    if (this.array.every(el => newObject.array.includes(el))) {
      return true;
    } else return false;

  }

  isDisjoint(newObject) {
    if (this.isEmpty() || newObject.isEmpty()) return true;

    return newObject.array.every(el => !this.array.includes(el));
  }

  isSame(newObject) {
    return (newObject.LEN === this.LEN) && (newObject.array.every(el => this.array.includes(el)));
  }

  add () {

  }

  intersection () {

  }

  difference () {

  }

  union () {

  }
}

module.exports = CustomSet;

// let empty = new CustomSet();
// console.log(empty.isEmpty()); // true

// let one = new CustomSet([1]);
// console.log(one.isEmpty()); // false

// let containsOne = new CustomSet();
// console.log(containsOne.contains(1)); // false

// let firstGroup = new CustomSet([1, 2, 3]);
// console.log(firstGroup.contains(1)); // true

// let secondGroup = new CustomSet([1, 2, 3]);
// console.log(secondGroup.contains(4));       //  false

// let subset1 = new CustomSet();
// console.log(subset1.isSubset(new CustomSet())); // true

// let subset2 = new CustomSet();
// console.log(subset2.isSubset(new CustomSet([1]))); // true

// let subset3 = new CustomSet([1]);
// console.log(subset3.isSubset(new CustomSet())); // false

// let subset4 = new CustomSet([1, 2, 3]);
// console.log(subset4.isSubset(new CustomSet([1, 2, 3]))); // true

// let subset5 = new CustomSet([1, 2, 3]);
// console.log(subset5.isSubset(new CustomSet([4, 1, 2, 3]))); // true

// let subset6 = new CustomSet([1, 2, 3]);
// console.log(subset6.isSubset(new CustomSet([4, 1, 3]))); // false

// last <> "set is not a subset of set that does not contain its elements"

// let disjoint1 = new CustomSet();
// console.log(disjoint1.isDisjoint(new CustomSet([]))) // true

// let disjoint2 = new CustomSet();
// console.log(disjoint2.isDisjoint(new CustomSet([1]))) // true

// let disjoint3 = new CustomSet([1]);
// console.log(disjoint3.isDisjoint(new CustomSet([]))) // true

// let disjoint4 = new CustomSet([1, 2]);
// console.log(disjoint4.isDisjoint(new CustomSet([2, 3]))) // false

// let disjoint5 = new CustomSet([1, 2]);
// console.log(disjoint5.isDisjoint(new CustomSet([3, 4]))) // true

let same1 = new CustomSet();
console.log(same1.isSame(new CustomSet())); // trye

let same2 = new CustomSet();
console.log(same2.isSame(new CustomSet([1, 2, 3]))); // false

let same3 = new CustomSet([1, 2, 3]);
console.log(same3.isSame(new CustomSet())); // false

let same4 = new CustomSet([1, 2]);
console.log(same4.isSame(new CustomSet([2, 1])));
