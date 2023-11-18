/*
Input: number
Output: string

'deficient'
'perfect'
'abundant'

Perfect: Sum of factors = number
Deficient: Sum of factors < number
Abundant: Sum of factors > number

*/

class PerfectNumber {
  constructor() {
  }

  static classify(number) {
    if (number < 0) {
      throw new Error('This is a negative number')
    }

    let divisors = PerfectNumber.getDivisors(number);
    let sum = divisors.reduce((acc, curr) => acc += curr, 0);

    console.log(divisors, sum);
    if (sum > number) return 'abundant';
    if (sum === number) return 'perfect';
    if (sum < number) return 'deficient';

    return null;
  }

  static getDivisors(number) {
    let divisors = [];
    let counter = 1;

    while (counter < number) {
      if (number % counter === 0) {
        divisors.push(counter);
      }
      counter += 1;
    }

    return divisors;
  }
};

module.exports = PerfectNumber;

/*
Tests

console.log(PerfectNumber.classify(13)); // deficient
console.log(PerfectNumber.classify(28)); // perfect
console.log(PerfectNumber.classify(12)); // abundant
console.log(PerfectNumber.classify(-1));

*/
