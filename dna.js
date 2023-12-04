/*
Notes:
Write a program that can calculate the Hamming distance between two DNA strands.
The Hamming distance is only defined for sequences of equal length.
If you have two sequences of unequal length, you should compute the
Hamming distance over the shorter length.

*/

'use strict';

class DNA {
  constructor (matchStrand) {
    this.matchStrand = matchStrand;
  }

  hammingDistance(compareStrand) {
    let copyOfMatch = this.matchStrand.slice();
    let copyOfCompare = compareStrand.slice();

    if (copyOfCompare === copyOfMatch) return 0;
    if (copyOfMatch.length > copyOfCompare.length) copyOfMatch = copyOfMatch.slice(0, copyOfCompare.length);
    if (copyOfCompare.length > copyOfMatch.length) copyOfCompare = copyOfCompare.slice(0, copyOfMatch.length);

    let counter = 0;

    for (let index = 0; index < copyOfMatch.length; index += 1) {
      if (copyOfMatch[index] !== copyOfCompare[index]) counter += 1;
    }

    return counter;
  }
};

let one = new DNA('');
console.log(one.hammingDistance('')); // 0

let two = new DNA('GGACTGA');
console.log(two.hammingDistance('GGACTGA')); // 0

let three = new DNA('ACT');
console.log(three.hammingDistance('GGA')); // 3

let strand = 'GGACGGATTCTGACCTGGACTAATTTTGGGG';
let distance = 'AGGACGGATTCTGACCTGGACTAATTTTGGGG';

let four = new DNA(strand);
console.log(four.hammingDistance(distance)); // 19

let five = new DNA('GGACG');
console.log(five.hammingDistance('GGTCG')); // 1

let six = new DNA('ACCAGGG');
console.log(six.hammingDistance('ACTATGG')); // 2

let seven = new DNA('AAACTAGGGG');
console.log(seven.hammingDistance('AGGCTAGCGGTAGGAC')); // 3

let eight = new DNA('GACTACGGACAGGGTAGGGAAT');
let distance2 = 'GACATCGCACACC';
console.log(eight.hammingDistance(distance2)); // 5

let nine = new DNA('AGACAACAGCCAGCCGCCGGATT');
console.log(nine.hammingDistance('AGGCAA')); // 1
console.log(nine.hammingDistance('AGACATCTTTCAGCCGCCGGATTAGGCAA')); // 4
console.log(nine.hammingDistance('AGG')); // 1

module.exports = DNA;

/*




*/

/*
tests

1. "no difference between empty strands"
2. "no difference between identical strands"
3. "complete hamming distance in small strand"
4. "hamming distance in off by one strand"
5. "small hamming distance in middle somewhere"
6. "larger distance"
7. "ignores extra length on other strand when longer"
8. "ignores extra length on original strand when longer"
9. "does not actually shorten original strand"

*/
