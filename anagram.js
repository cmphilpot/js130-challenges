class Anagram {
  constructor (word) {
    this.matchWord = word.toLowerCase();
  }

  sortChars() {

  }

  isAnagram () {

  }

  match(list) {

  }
}

let penultimate = ['eagle'];
let last = ['cashregister', 'Carthorse', 'radishes'];

let pen = new Anagram('galea');
let lst = new Anagram('Orchestra');

console.log(pen.match(penultimate));
console.log(lst.match(last));

/*
let words = ["enlists", "google", "inlets", "banana"];
let one = ['hello', 'world', 'zombies', 'pants'];
let two = ['stream', 'pigeon', 'maters'];
let three = ['corn', 'dark', 'Corn', 'rank', 'CORN', 'cron', 'park'];

let anagram = new Anagram("listen"); // ,
console.log(anagram.match(words)); // [inlets]

let anagram1 = new Anagram("diaper"); // ,
console.log(anagram1.match(one)); // []

let anagram2 = new Anagram("master"); // ,
console.log(anagram2.match(two)); // ['maters', 'stream']

let anagram3 = new Anagram("corn"); // ,
console.log(anagram3.match(three)); // ['cron']
*/

/*
10 tests:

1. "No matches returns empty array"
2. "Detect simple anagram"
3. "Detect multiple anagrams"
4. "Do not confuse different duplicates"
5. "Identical word is not anagram"
6. "Eliminate anagrams with same checksum"
7. "Eliminate anagram subsets"
8. "Detect anagram"
9. "Multiple anagrams"
10. "Anagrams are case-insensitive"

*/

/*
Original implementation:

class Anagram {
  constructor (word) {
    this.matchWord = word.toLowerCase();
  }
  match(list) {
    let newArr = [];
    const LEN_OF_MATCHWORD = this.matchWord.length;
    let lowerCasedList = list.map(word => word.toLowerCase());


    lowerCasedList.forEach(word => {
      const LEN = word.length;
      let arrOfLetters = [...word];

      if ((LEN === LEN_OF_MATCHWORD) && (word !== this.matchWord) && (arrOfLetters.every(letter => this.matchWord.includes(letter))))
        newArr.push(word);
    });

    return newArr;
  }
}


*/

module.exports = Anagram;
