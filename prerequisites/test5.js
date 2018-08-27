// In the snippet below, what is the "type" of foo?

// The answer is "object"  because Javascript considers Arrays to just be an object with some special properties.
// So in this example:
// var foo = [1,2,3];

// When you console log out the "type" of foo (using Javascript's "typeof" operator), it says "object"
// console.log(typeof(foo));
// "object"

// Knowledge of this quirk comes in handy when you're parsing payloads / parameters and
// trying to validate that they are what you think they are. In this case, if the
// typeof(foo) equals "object" it might actually be an array.

// There's a few other ways to check to see if it's an array. One of them is:
// console.log(foo instanceof Array)
// true

// In reality, Objects are really just associative arrays, and Arrays are a kind of Object.
// But what matters here is that Javascript considers an Array's "type" to be "object"

let foo = [1,2,3];

console.log(typeof foo);
console.log(foo instanceof Array);

// object
// true