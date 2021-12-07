import { input2 } from "./input2.js";

let testSetArray = [
  "forward 6",
  "forward 8",
  "down 6",
  "down 6",
  "forward 9",
  "down 7",
  "down 3",
  "forward 4",
  "forward 7",
  "up 3",
  "forward 9",
  "up 4",
];

// Starting at 0,0,0
let directions = {
  up: 0,
  down: 0,
  forward: 0,
  aim: 0,
};

let heading = {
  position: 0,
  depth: 0,
};

// main logic loop
input2.forEach((directive) => {
  let tupleDirective = tuple(directive);
  moveBy(tupleDirective, directions, heading);
});

console.log("[--------------]");
console.log(`heading: ${heading.position} : ${heading.depth}`);
console.log("[--------------]");

// Helpers
function moveBy(tupleInput, dirInput, currentPosition) {
  switch (tupleInput[0]) {
    case "up":
      dirInput["aim"] -= Number(tupleInput[1]);
      break;
    case "down":
      dirInput["aim"] += Number(tupleInput[1]);
      break;
    case "forward":
      currentPosition["position"] += Number(tupleInput[1]);
      currentPosition["depth"] += dirInput["aim"] * tupleInput[1];
      break;
    default:
      console.log("something has gone wrong...");
  }
}

function sum(inputArray) {
  return inputArray.reduce((previousValue, currentValue) => {
    let previous = Number(previousValue);
    let current = Number(currentValue);
    return previous + current;
  });
}

function difference(firstinput, secondinput) {
  return firstinput > secondinput
    ? firstinput - secondinput
    : secondinput - firstinput;
}

function tuple(inputString) {
  return inputString.split(" ");
}

function parseDirection(inputTuple) {
  // Tuple is Array in the format [direction, distance]
  return inputTuple[0];
}

function parseDistance(inputTuple) {
  // Tuple is Array in the format [direction, distance]
  return inputTuple[1];
}
