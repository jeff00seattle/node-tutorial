// In the code snippet below, in which order will the statements log?

console.log('a');
setTimeout(function(){
    console.log('b');
},1000);
console.log('c');


// a
// c
// b
