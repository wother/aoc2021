import { input3 } from "./input3.js";

let matrix = [
  [],
  [],
  [],
  [], 
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];


input3.forEach(input =>{
  let inputArray = splitIndex(input);
  inputArray.forEach((bitString, index) => {
    matrix[index].push(bitString)
  });
});
let GAMMA = "";
let EPSILON = "";
matrix.forEach((matrixArray, index) => {
  let gammaValue = calcGamma(matrixArray)[0][0];
  let epsilonValue = calcEpsilon(matrixArray)[0][0];
  // console.log(`${index} : Gamma - ${gammaValue}`);
  // console.log(`${index} : Epsilon - ${epsilonValue}`);
  GAMMA += gammaValue;
  EPSILON += epsilonValue;
});
console.log(`GAMMA: ${parseInt(GAMMA, 2)}`);
console.log(`EPSILON: ${parseInt(EPSILON, 2)}`);
console.log("---------------")
console.log(`ANSWER: ${parseInt(GAMMA, 2) * parseInt(EPSILON, 2)}`);

function splitIndex(inputString) {
  return inputString.split("");
};

function calcGamma(inputArray) {
  // Most common bit is returned
  let countedBits = countBits(inputArray);
  let tuples = Object.entries(countedBits);
  let bigger;
  if (tuples[0][1] > tuples[1][1]) {
    bigger = tuples[0];
  } else {
    bigger = tuples[1];
  }
  return bigger;
}

function calcEpsilon(inputArray) {
  // Least Common bit is returned
  let countedBits = countBits(inputArray);
  let tuple = Object.entries(countedBits);
  let smaller;
  if (tuple[0][1] < tuple[1][1]) {
    smaller = tuple[0];
  } else {
    smaller = tuple[1];
  }
  return smaller;
}

function countBits(inputArray){
  let resultObj = {};
  inputArray.forEach((bit) => {
    resultObj[bit] ? (resultObj[bit] += 1) : (resultObj[bit] = 1);
  });
  return resultObj;
}