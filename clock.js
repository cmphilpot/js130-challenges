'use strict';

class Clock {
  constructor (string) {
    this.clock = string;
  }

  static addLeadingZeros (number) {
    return '0' + number;
  }

  static at (hours, minutes = 0) {
    hours = String(hours).length < 2 ? this.addLeadingZeros(hours): hours;
    minutes = String(minutes).length < 2 ? this.addLeadingZeros(minutes): minutes;

    return new Clock(hours, minutes);
  }

  add (timeToAdd) {
    let timeArray = this.clock.split(':');
    let hours = timeArray[0];
    let minutes = timeArray[1];

    console.log(hours, '---', minutes)
  }

  subtract (number) {

  }

  static toString () {

  }
  toString () {

  }

}

module.exports = Clock;


/* tests


*/

// console.log(Clock.at(8));  // '08:00'    <<< leading zero
console.log(Clock.at(9));  // '09:00'    <<< leading zero
// console.log(Clock.at(11, 9));  // '11:09'
// console.log(Clock.at(10).add(3));  // '10:03'
// // add & subtract do not mutate
// console.log(Clock.at(10).add(61));  // '11:01'
// console.log(Clock.at(23, 30).add(60));  // '00:30'  wrap around at midnight
