"use strict"

// function mult(a,b) {
//   return a * b;
// }

// var mult = (a,b) => a * b;

const mult = ((a,b) => {
  return a * b;
});


// setTimeout(function() {
//   console.log(mult(5,10));
// },1000)

// setTimeout(() => {
//   console.log(mult(5,10));
// },1000)

setTimeout(() => console.log(mult(5,10)) ,1000)