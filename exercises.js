// Our very own bind()

/* function myBind(func, context, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);
    return func.call(context, fullArgs)
  }
}
*/

/*
Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.
*/

/*
function delegate (contextObj, methodName, message) {
  return function () {
    return contextObj[methodName](`${message}`);
  }
}
*/
/*
function delegate (contextObj, methodName, ...args) {
  return function () {
    return contextObj[methodName].call(contextObj, ...args);
  }
}
*/
/*
function delegate (contextObj, methodName, ...args) {
  return function () {
    return contextObj[methodName].apply(contextObj, args);
  }
}
*/
