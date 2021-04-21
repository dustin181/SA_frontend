"use strict"

function missingArg(){
  throw new Error("Function square requires an argument!")
}

function square(a = missingArg()){
  console.log(a * a);
}

square(10);
square();

