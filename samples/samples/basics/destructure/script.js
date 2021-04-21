"use strict"

var obj = {
  x : 5,
  y: 20,
  z: 3
}

// function mult(object) {
//   var {x, y, z} = object;
//   return x * y * z;
// }

function mult({x, y, z}) {
  return x * y * z;
}


console.log(mult(obj))