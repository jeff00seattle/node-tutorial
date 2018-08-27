
// In Javascript, why does this expression evaluate to false?

// As with many languages, the Node.js runtime (and JS in general)
// uses floating-point arithmetic when doing math. So in the above
// example: 0.2 + 0.4 doesn't equal 0.6. It actually equals 0.6000000000000001.
// Therefore, the expression above evaluates to false. Since we're using 2 equals
// signs instead of 3, the "types" are not actually the problem.

console.log(0.2 + 0.4 == '0.6');
console.log(0.2 + 0.4 === '0.6');

console.log(0.2 + 0.4 == 0.6);
console.log(0.2 + 0.4 === 0.6);


console.log((0.2 + 0.4) == 0.6);
console.log((0.2 + 0.4) === 0.6);

let x = 0.2;
let y = 0.4;
console.log(x + y);
console.log(0.2 + 0.4);

console.log(0.6 == 0.6);
console.log(0.6 === 0.6);