// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add (todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add Todo objects');
    } else {
      this.todos.push(todo);
    }
  }

  size () {
    return this.todos.length;
  }

  first () {
    return this.todos.length ? this.todos.slice().shift(): undefined;
  }

  last () {
    return this.todos.length ? this.todos.slice().pop(): undefined;
  }

  itemAt(index) {
    if (typeof index !== 'number' || index > this.todos.length) throw ReferenceError('invalid index');
    return this.todos[index];
  }

  /* alternative implementation:

  _validateIndex (index ) {
    if (!(index in this.todos)) throw ReferenceError('Invalid index: ${index}');
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  */

  markDoneAt(index) {
    return this.todos[index].markDone();
  }

  markUndoneAt(index) {
    return this.todos[index].markUndone();
  }

  isDone () {
    return this.todos.every(todo => todo.isDone())
  }

  /* alternative implementation

  let done = this.todos.filter(todo => !todo.isDone());
  reutrn done.length === 0;

  */
  pop () {
    return this.todos.slice().pop();
  }

  shift () {
    return this.todos.slice().shift();
  }
}

let list = new TodoList("Today's Todos");
let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
console.log(list);
console.log(list.size());  // 4

console.log(list.first());
console.log(list.last());

let emptyList = new TodoList("Empty List");
console.log(emptyList.first());
console.log(emptyList.last());
// console.log(list.itemAt('a'));

// Omitted code

console.log(list.isDone()); // false

list.markDoneAt(0);
list.markDoneAt(1);
list.markDoneAt(2);
list.markDoneAt(3);
console.log(list.isDone()); // true

list.markUndoneAt(2);
console.log(list.isDone()); // false

console.log(list.shift());
console.log(list.pop());
console.log(list);

console.log(emptyList.shift());
console.log(emptyList.pop());
console.log(emptyList);

/*
let str = 'd@4-dn,abbaP15.zxMAMe345PAP435xz,n-dd';

function isPallindrome (string) {
  return string === string.split('').reverse().join('');
} // tested

function chasesFunc(inputString) {
  let results = [];

  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j < inputString.length; j++) {
      let currentSubstring = inputString.slice(i, j + 1); // 'Chase' slice(0, 2); // 'Ch'
      if (isPallindrome(currentSubstring)) {  // && currentSubstring.length > 1
        results.push(currentSubstring);
      }
    }
  }

  return results;
}

console.log(chasesFunc(str)); // ['abba', 'bb', 'MAM', 'PAP', 'dd']; 
*/
