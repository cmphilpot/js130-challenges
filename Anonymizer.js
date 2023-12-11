"use strict";

function getRandomChar() {
  const DIGITS = '1234567890';
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  const ALL_CHARS = [...DIGITS, ...LETTERS.toUpperCase(),...LETTERS];

  let index = Math.floor(Math.random() * ALL_CHARS.length);
  return ALL_CHARS[index];
}

function anonymize () {
  const SEQUENCE_LENGTH = 16;
  let charSequence = '';

  for (let index = 0; index < SEQUENCE_LENGTH; index += 1) {
    charSequence += getRandomChar();
  }
  return charSequence;
}

function setDisplayName () {
  return function () {
    return anonymize ();
  }
}

const Account = {
  init (email, password, firstName, lastName) {
    let setter = setDisplayName();
    this.userEmail = email,
    this.userPassword = password,
    this.userFirstName = firstName,
    this.userLastName = lastName,
    this.displayName = setter();
    return this;
  },

  isValidPassword (password) {
    return password === this.userPassword;
  },

  reanonymize (password) {
    let setter = setDisplayName();

    if (this.isValidPassword(password)) {
      this.displayName = setter();
      return true;
    } else {
      return 'Invalid Password';
    }
  },

  resetPassword (currentPassword, newPassword) {
    if (this.isValidPassword(currentPassword)) {
      this.userPassword = newPassword;
      return true;
    } else {
      return 'Invalid Password';
    }
  },

  firstName (password) {
    return this.isValidPassword(password) ? this.userFirstName : 'Invalid Password';
  },

  lastName (password) {
    return this.isValidPassword(password) ? this.userLastName : 'Invalid Password';
  },

  email (password) {
    return this.isValidPassword(password) ? this.userEmail : 'Invalid Password';
  },

  displayName () {
    return this.displayName;
  }
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false


/*  LS Solution using IIFE


let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(testPassword) {
    return userPassword === testPassword;
  }

  function getRandomLetterNumber() {
    let randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'[randomIndex];
  }

  function anonymize () {
    let result = '';

    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init (email, password, firstName, lastName) {
      userEmail = email,
      userPassword = password,
      userFirstName = firstName,
      userLastName = lastName,
      this.displayName = anonymize();
      return this;
    },

    reanonymize (password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid password";
      }
    },

    resetPassword (currentPassword, newPassword) {
      if (isValidPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid password";
      }
    },

    firstName (password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return "Invalid password";
      }
    },

    lastName (password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return "Invalid password";
      }
    },

    email (password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return "Invalid password";
      }
    },

    displayName () {
      return this.displayName;
    }
  }
})()

*/
