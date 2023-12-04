/* a program given a word, computes the Scrabble score for that word.

Value breakdown:

1: A, E, I, O, U, L, N, R, S, T
2: D, G
3: B, C, M, P
4: F, H, V, W, Y
5: K
8: J, X
10: Q, Z

*/
'use strict';

class Scrabble {
  static POINTS_TABLE = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  constructor (word) {
    this.word = word ? word.trim() : '';
  }

  score() {
    let word = this.word;
    if (word.length === 0) return 0;
    word = word.toUpperCase();

    return word.split('').map(letter => Scrabble.POINTS_TABLE[letter]).reduce((acc, curr) => acc + curr, 0);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
};

module.exports = Scrabble;

let f = new Scrabble('f');
console.log(f.score()); // 4

let a = new Scrabble('a');
console.log(a.score()); // 1

let none = new Scrabble('');
console.log(none.score()); // 0

let street = new Scrabble('street');
console.log(street.score()); // 6

let quirky = new Scrabble('quirky');
console.log(quirky.score()); // 22

let oxyphenbutazone = new Scrabble('OXYPHENBUTAZONE');
console.log(oxyphenbutazone.score()); // 41

// let alacrity = Scrabble.score('alacrity');
console.log(Scrabble.score('alacrity')); // 13

let last = new Scrabble(" \t\n");
console.log(last.score());
/*
Tests

let cabbage = new Scrabble('CABBAGE');
console.log(cabbage.score()); // 14

let f = new Scrabble('f');
console.log(f.score()); // 4

let a = new Scrabble('a');
console.log(a.score()); // 1

let none = new Scrabble('');
console.log(none.score()); // 0

let street = new Scrabble('street');
console.log(street.score()); // 6

let quirky = new Scrabble('quirky');
console.log(quirky.score()); // 22

let oxyphenbutazone = new Scrabble('OXYPHENBUTAZONE');
console.log(oxyphenbutazone.score()); // 41

console.log(Scrabble.score('alacrity')); // 13
*/
