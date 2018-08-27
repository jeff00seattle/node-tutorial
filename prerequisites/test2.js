// In the snippet below, what is the value of foo?

let myArray = ['a','b','c'];

let foo = myArray[3];
console.log(foo);
// undefined

// Since arrays start counting at position zero (myArray[0]),
// the position referenced above is actually the 4th position
// in the array, not the 3rd. And as you can see, there is
// no 4th position defined, so it will return "undefined"

let bar = myArray[2];
console.log(bar);
// c