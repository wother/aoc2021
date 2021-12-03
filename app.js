import { inputArray } from './input.js';

let numBigger = 0;
let last = 143;

inputArray.forEach((inputNumber) => {
  if (inputNumber > last) {
    numBigger++;
    last = inputNumber;
  } else {
    last = inputNumber;
  }
});
console.log(numBigger);