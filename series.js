'use strict';

class Series {
 constructor (stringInput) {
  this.string = stringInput;
 }

 lengthOfInputString () {
  return this.string.length;
 }

 slices(lengthOfSubstring) {
  if (lengthOfSubstring > this.lengthOfInputString()) {
    throw new Error('Sorry, cannot check for a substring length longer than the string itself');
  };

  let listOfSubstrings = [];
  let chunk;

  for (let index = 0; index <= this.lengthOfInputString() - lengthOfSubstring; index += 1) {
    chunk = this.string.slice(index, (index + lengthOfSubstring));
      listOfSubstrings.push(chunk);
  }

  return listOfSubstrings.map(string => string.split('').map(digit => Number(digit)));
 }
}

module.exports = Series;
