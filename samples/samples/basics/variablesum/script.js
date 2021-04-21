"use strict"

function sum(...args) {
  console.log(args);
  let sum = 0;
  let i;
  for(i = 0;i < args.length;i++){
    sum = sum + args[i];
  }
  console.log(sum)
}

sum(1,3);
sum(1,3,10, 20);
sum(1,3);
