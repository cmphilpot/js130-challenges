'use strict';

class CustomSet {
  constructor (array) {
    this.LEN = Array.isArray(array) ? array.length : 0;
    this.array = Array.isArray(array) ? array : [];
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

  add (newValue) {
    if (this.isEmpty()) return new CustomSet([newValue])
    if (!this.isEmpty()) {
      let combined = [...this.array, newValue].filter((element, index, array) => array.indexOf(element) === index);
      return new CustomSet(combined)
    }
  }

  intersection (newObject) {
    if (this.isEmpty() || newObject.isEmpty()) return new CustomSet();
    if (!this.array.some(element => newObject.array.includes(element))) return new CustomSet();

    let shared = [];

    for (let index = 0; index < this.LEN; index += 1) {
      if (newObject.array.includes(this.array[index])) {
        shared.push(this.array[index]);
      }
    }

    return new CustomSet(shared);
  }

  difference (newObject) {
    if (this.isEmpty()) return new CustomSet();
    if (!this.isEmpty() && newObject.isEmpty()) return new CustomSet([...this.array]);  // <<
    if (!this.isEmpty() && !newObject.isEmpty()) {
      return new CustomSet([...this.array.filter(ele => !newObject.array.includes(ele))]);  // <<
    }
  }

  union (newObject) {
    if (this.isEmpty() && newObject.isEmpty()) return new CustomSet();
    if (this.isEmpty() && !newObject.isEmpty()) return new CustomSet(newObject.array);
    if (!this.isEmpty() && newObject.isEmpty()) return new CustomSet(this.array);
    if (!this.isEmpty() && !newObject.isEmpty()) {
      let combined = [...newObject.array, ...this.array]
      .filter((element, index, array) => array.indexOf(element) === index);
      return new CustomSet(combined);
    }

  }
}

module.exports = CustomSet;

/*
combinedArray.indexOf(element) === combinedArray.lastIndexOf(element));
  return returnVal.filter((el, idx, arr) => arr.indexOf(el) === idx);

     this.filteredForUniques = array.filter((element, idx, arr) => arr.indexOf(element));
    console.log(this.set);
*/
/* tests
let empty = new CustomSet();
console.log(empty.isEmpty()); // true

let one = new CustomSet([1]);
console.log(one.isEmpty()); // false

let containsOne = new CustomSet();
console.log(containsOne.contains(1)); // false

let firstGroup = new CustomSet([1, 2, 3]);
console.log(firstGroup.contains(1)); // true

let secondGroup = new CustomSet([1, 2, 3]);
console.log(secondGroup.contains(4));       //  false

let subset1 = new CustomSet();
console.log(subset1.isSubset(new CustomSet())); // true

let subset2 = new CustomSet();
console.log(subset2.isSubset(new CustomSet([1]))); // true

let subset3 = new CustomSet([1]);
console.log(subset3.isSubset(new CustomSet())); // false

let subset4 = new CustomSet([1, 2, 3]);
console.log(subset4.isSubset(new CustomSet([1, 2, 3]))); // true

let subset5 = new CustomSet([1, 2, 3]);
console.log(subset5.isSubset(new CustomSet([4, 1, 2, 3]))); // true

let subset6 = new CustomSet([1, 2, 3]);
console.log(subset6.isSubset(new CustomSet([4, 1, 3]))); // false

last <> "set is not a subset of set that does not contain its elements"

let disjoint1 = new CustomSet();
console.log(disjoint1.isDisjoint(new CustomSet([]))) // true

let disjoint2 = new CustomSet();
console.log(disjoint2.isDisjoint(new CustomSet([1]))) // true

let disjoint3 = new CustomSet([1]);
console.log(disjoint3.isDisjoint(new CustomSet([]))) // true

let disjoint4 = new CustomSet([1, 2]);
console.log(disjoint4.isDisjoint(new CustomSet([2, 3]))) // false

let disjoint5 = new CustomSet([1, 2]);
console.log(disjoint5.isDisjoint(new CustomSet([3, 4]))) // true

let same1 = new CustomSet();
console.log(same1.isSame(new CustomSet())); // trye

let same2 = new CustomSet();
console.log(same2.isSame(new CustomSet([1, 2, 3]))); // false

let same3 = new CustomSet([1, 2, 3]);
console.log(same3.isSame(new CustomSet())); // false

let same4 = new CustomSet([1, 2]);
console.log(same4.isSame(new CustomSet([2, 1])));

const actual = new CustomSet();
actual.add(3);
console.log(actual);              // [3]

const actual2 = new CustomSet([1, 2, 4]);
actual2.add(3);
console.log(actual2);          // [1, 2, 4, 3]

const actual3 = new CustomSet([1, 2, 3]);
actual3.add(3);
console.log(actual3);      // [1, 2, 3]

const actual = new CustomSet();
console.log(actual.intersection(new CustomSet()));

const actual2 = new CustomSet();
console.log(actual2.intersection(new CustomSet([3, 5, 7])));
// const comparison = new CustomSet();

const actual3 = new CustomSet([3, 5, 7]);
console.log(actual3.intersection(new CustomSet()));
// const comparison = new CustomSet();

"intersection of two sets with no shared elements is an empty set"
const actual = new CustomSet([1, 2, 3]);
console.log(actual.intersection(new CustomSet([4, 5, 6])));  // []

"intersection of two sets with shared elements is a set of the shared elements"
const actual1 = new CustomSet([1, 2, 3, 4]);
console.log(actual1.intersection(new CustomSet([3, 2, 5]))); // [2, 3]

const actual = new CustomSet([1, 2, 3, 4]);
console.log(actual.difference(new CustomSet())); // [1, 2, 3, 4]


const actual1 = new CustomSet([3, 2, 1]);
console.log(actual1.difference(new CustomSet([2, 4])));  // [3, 1]
*/
