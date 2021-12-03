import { inputArray } from "./input.js";

let numBigger = 0;
let last = 143;

export function dayOne () {
  // Primary Loop
  inputArray.forEach((inputNumber, index) => {
    let nextIndex = index + 1;
    let currentChunk = chunkAtIndex(inputArray, 3, index);
    let nextChunk = chunkAtIndex(inputArray, 3, nextIndex);
    if (sumElements(currentChunk) > sumElements(nextChunk)) {
      numBigger++;
    }
  });

  // Display logic
  // let chunk = chunkAtIndex(inputArray, 3, 0);
  // let sumTotal = sumElements(chunk);
  console.log(numBigger);
}

function chunkAtIndex(inputArr, size, startIndex) {
  let output = [];
  for (let index = 0; index < size; index++) {
    if (!!inputArr[startIndex + index]) {
      output.push(inputArr[startIndex + index]);
    }
  }
  return output;
}

function sumElements(input) {
  let output = 0;
  input.forEach((num) => {
    output += num;
  });
  return output;
}
