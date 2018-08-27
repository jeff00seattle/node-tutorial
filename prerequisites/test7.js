
// In Javascript, what will be the value of foo?

// When looking for the index of a certain value (within an array),
// Javascript will return -1 if it can't find the element you're looking for.
// This can be confusing; you'd be forgiven for thinking "undefined" would be the right answer here.

let myArray = [1,2,3];
let foo = myArray.indexOf(4);

console.log(foo);
// -1