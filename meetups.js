'use strict';

class Meetup {
  constructor (year, month) {
    this.year = year;
    this.month = Meetup.MONTHS_AND_DAYS[month - 1][0];
  }

  static MONTHS_AND_DAYS = [
    ['January', 31], ['February', 28], ['March', 31], ['April', 30],
    ['May', 31], ['June', 30], ['July', 31], ['August', 31],
    ['September', 30], ['October', 31], ['November', 30], ['December', 31]
  ]
  static DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  static DESCRIPTORS = ['first', 'second', 'third', 'fourth', 'fifth', 'first', 'last', 'teenth'];

  static getLastDay() {

  }

  day (weekday, schedule) {
    weekday = weekday[0] === weekday[0].toUpperCase() ? weekday : weekday[0].toUpperCase() + weekday.slice(1);
    schedule = schedule.toLowerCase();

  }
}

module.exports = Meetup;

let jan = new Meetup(2023, 1);
