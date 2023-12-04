// // This class represents a todo item and its associated
// // data: the todo title and a flag that shows whether the
// // todo item is done.

// class Todo {
//   static DONE_MARKER = "X";
//   static UNDONE_MARKER = " ";

//   constructor(title) {
//     this.title = title;
//     this.done = false;
//   }

//   toString() {
//     let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
//     return `[${marker}] ${this.title}`;
//   }

//   markDone() {
//     this.done = true;
//   }

//   markUndone() {
//     this.done = false;
//   }

//   isDone() {
//     return this.done;
//   }

//   getTitle() {
//     return this.title;
//   }
// }

// class TodoList {
//   constructor(title) {
//     this.title = title;
//     this.todos = [];
//   }

//   add (todo) {
//     if (!(todo instanceof Todo)) {
//       throw new TypeError('can only add Todo objects');
//     }

//     this.todos.push(todo);
//   }

//   size () {
//     return this.todos.length;
//   }

//   first () {
//     return this.todos.length ? this.todos.slice().shift(): undefined;
//   }

//   last () {
//     return this.todos.length ? this.todos.slice().pop(): undefined;
//   }

//   itemAt(index) {
//     this._validateIndex(index);
//     return this.todos[index];

//     /*if (typeof index !== 'number' || index > this.todos.length) throw ReferenceError('invalid index');
//     return this.todos[index];
//     */
//   }

//   /* alternative implementation:

//   _validateIndex (index ) {
//     if (!(index in this.todos)) throw ReferenceError('Invalid index: ${index}');
//   }

//   itemAt(index) {
//     this._validateIndex(index);
//     return this.todos[index];
//   }

//   */

//   markDoneAt(index) {
//     this.itemAt(index).markDone();
//   }

//   markUndoneAt(index) {
//     return this.itemAt(index).markUndone();
//   }

//   isDone () {
//     return this.todos.every(todo => todo.isDone())
//   }

//   /* alternative implementation

//   let done = this.todos.filter(todo => !todo.isDone());
//   reutrn done.length === 0;

//   */
//   pop () {
//     return this.todos.pop();
//   }

//   shift () {
//     return this.todos.shift();
//   }

//   removeAt(index) {
//     this._validateIndex(index);
//     return this.todos.splice(index, 1);
//   }

//   toString() {
//     let title = `---- ${this.title} ----`;
//     let list = this.todos.map(todo => todo.toString()).join('\n');
//     return `${title}\n${list}`;
//   }

//   forEach(callback) {
//     this.todos.forEach(callback);
//   }
//   /*
//   the version above avoids creating a new callback function
//   for the this.todos.forEach invocation

//   forEach (callback) {
//     this.todos.forEach(todo => callback(todo));
//   }

//   using a `for loop`:
//   forEach(callback) {
//     for (let index = 0; index < this.size(); index += 1) {
//       callback(this.todos[index]);
//     }
//   }
//   */

//   filter (callback) {
//     let newList = new TodoList(this.title);

//     this.forEach(todo => {
//       if (callback(todo)) {
//          newList.add(todo);
//       }
//     });
//     return newList;
//   }

//   _validateIndex(index) {
//     if (!(index in this.todos)) {
//       throw new ReferenceError(`invalid index: ${index}`);
//     }
//   }


//   findByTitle(title) {
//     return this.filter(todo => todo.getTitle() === title).first();
//   }

//   // findByTitle(title) {
//   //   return this.todos.filter(todo => todo.title === title)[0];
//   // }

//   allDone() {
//     return this.filter(todo => todo.isDone());
//   }


//   allNotDone() {
//     return this.filter(todo => !todo.isDone());
//   }

//   /*
//     markDone(title) {
//      this.findByTitle(title).markDone();
//     }
//   */

//   markDone(title) {
//     let todo = this.findByTitle(title);
//     if (todo !== undefined) {
//       todo.markDone();
//     }
//   }

//   markAllDone() {
//     this.forEach(todo => todo.markDone());
//   }

//   markAllUndone () {
//     this.forEach(todo => todo.markUndone());
//   }

//   toArray() {
//     return this.todos.slice();
//   }
// }

// /*
// let list = new TodoList("Today's Todos");
// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// console.log(list);
// console.log(list.size());  // 4

// console.log(list.first());
// console.log(list.last());

// let emptyList = new TodoList("Empty List");
// console.log(emptyList.first());
// console.log(emptyList.last());
// // console.log(list.itemAt('a'));

// // Omitted code

// console.log(list.isDone()); // false

// list.markDoneAt(0);
// list.markDoneAt(1);
// list.markDoneAt(2);
// list.markDoneAt(3);
// console.log(list.isDone()); // true

// list.markUndoneAt(2);
// console.log(list.isDone()); // false

// console.log(list.shift());
// console.log(list.pop());
// console.log(list);

// console.log(emptyList.shift());
// console.log(emptyList.pop());
// console.log(emptyList);
// */

// /*
// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// let list = new TodoList("Today's Todos");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// list.add(todo5);
// list.add(todo6);

// list.forEach(todo => console.log(todo.toString()));
// */

// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// let list = new TodoList("Today's Todos");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// list.add(todo5);
// list.add(todo6);
// todo1.markDone();
// todo5.markDone();

// // let doneTodos = list.filter(todo => todo.isDone());
// // //console.log(doneTodos);
// // console.log(list.filter(todo => todo.isDone()).first());

// // console.log(list.findByTitle('Study for Launch School'));
// console.log(list.allNotDone());
// console.log(list.markDone('Study for Launch School'));
// console.log(list.toArray());
// ///////


// function add(first, second) {
//   return first + second;
// }

// function makePhrase(firstLetter) {
//   return function(secondLetter) {
//     return add(firstLetter, secondLetter);
//   };
// }

// let addToSalam = makePhrase('salam');
// let addSalam = makePhrase('wa alaykum');

// console.log(addToSalam(' alaykum'));  //
// console.log(addToSalam(' alaykum')); //
// console.log(addSalam(' salam'));   //
// console.log(addSalam(' salam'));  //

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);


// function later2 (func, arg) {
//   return (alsoArg) => func (arg, alsoArg);
// }

// "use strict";


// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }

// function makeCounterLogger(number) {
//   return (number2) => {

//     if (number2 > number) {
//       for (let index = number; index <= number2; index += 1) {
//         console.log(number);
//         number += 1;
//       }
//     } else {
//       for (let index = number; index >= number2; index -= 1) {
//         console.log(number);
//         number -= 1;
//       }
//     }
//     console.log('over')
//   }
// }

// let countlog = makeCounterLogger(5);
// // countlog(8); // 5, 6, 7, 8
// countlog(2); // 5, 4, 3, 2

// function makeList () {
//   let list = [];

//   return function (arg) {
//     if (arg) {
//       if (!list.includes(arg)) {
//         list.push(arg);
//         console.log(`${arg} added!`)
//       } else {
//         list = list.filter(el => el !== arg);
//         console.log(`${arg} removed!`)
//       }
//     } else if (list.length === 0) {
//       console.log(`The list is empty`);
//     } else {
//       list.forEach(item => console.log(item));
//     }
//   }
// }

// let list = makeList();
// console.log(list());
// // The list is empty.

// console.log(list("make breakfast"));
// // make breakfast added!

// console.log(list("read book"));
// // read book added!

// console.log(list());
// // make breakfast
// // read book

// console.log(list("make breakfast"));
// // make breakfast removed!

// console.log(list());
// // read book

// function makeList () {
//   let collection = [];
//   let object = {
//     add: function (item) {
//       let index = collection.indexOf(item);

//       if (index === -1) {
//         collection.push(item);
//         console.log(`${item} added!`)
//       }

//     },
//     list: function () {
//       if (collection.length === 0) {
//         console.log(`The list is empty`);
//       } else {
//         collection.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     },
//     remove: function (item) {
//       let index = collection.indexOf(item);
//       if (index !== -1) {
//         collection.splice(index, 1);
//       }
//       console.log(`${item} removed!`)
//     }
//   };

//   return object;
// }
// let list = makeList();
// console.log(list.add("peas"));
// // peas added!

// console.log(list.list());
// // peas

// console.log(list.add("corn"));
// // corn added!

// console.log(list.list());
// // peas
// // corn

// console.log(list.remove("peas"));
// // peas removed!

// console.log(list.list());
// // corn

// console.log((function(num) {
//   while (num >= 0) {
//     console.log(num);
//     num -= 1;
//   }
// })(7))

// console.log((function(number) {
//   for (let currentNumber = number; currentNumber >= 0; currentNumber -= 1) {
//     console.log(currentNumber);
//   }
// })(7));

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const arr = [1, 2, 3];
// let [first, ...rest] = arr;
// console.log(first, rest)

// const obj = { a: 'a', b: 'b', c: 'c' };
// let {c: tail, ...obj2} = obj;
// console.log(tail, obj2)

// const arr = [1, 2, 3];

// function prod(num1, num2) {
//   return num1 * num2;
// }

// console.log(prod(...arr));

// let obj = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
// };

// let obj2 = {...obj};
// let { ...obj3 } = obj;

// function optional (one, two, three, four, five) {
//   return {
//     first: one,
//     last: five,
//     middle: [two, three, four].sort(),
//   }
// }

// let array = ['first', 'mid1', 'mid2', 'mid3', 'last'];

// // console.log(optional(...array))

// let {first, last, middle} = optional(...array);
// console.log(first, last, middle)

// function createBankAccount() {
//   let transactions = [];

//   return {
//     balance: 0,

//     deposit(amount) {
//       this.balance += amount;
//       transactions.push({ deposit: amount });
//     },

//     withdraw(amount) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//         transactions.push({ withdrawal: amount });
//       } else {
//         console.log("overdrawn!");
//       }
//     },

//     getMostRecentTransaction() {
//       return Object.assign({}, transactions[transactions.length - 1]);
//     }
//   };
// }

// let array = [1, 2, 3];

// let [...newArray] = array;

// console.log(newArray);

var b = 100;

const foo = () => {
  b = 200;
  return () => {
    console.log(b);
  }
}

b = 300;

console.log(foo()());

/*
var b = 100;

const foo = () => {
  b = 200;
  return () => {
    console.log(b);
  }
}

b = 300;

foo()();

*/
