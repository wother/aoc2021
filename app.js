import { input2 } from "./input2.js";

// Starting at 0,0,0
let directions = {
  up: [],
  down: [],
  forward: []
};

// main logic loop
input2.forEach((directive) => {
  let tupleDirective = tuple(directive);
  directions[parseDirection(tupleDirective)].push(
    parseDistance(tupleDirective)
  );
});

let finalForward = sum(directions["forward"]);
let finalDepth = difference(sum(directions["up"]), sum(directions["down"]));

console.log("[--------------]");
console.log(`> up: ${sum(directions["up"])}`);
console.log(`> down: ${sum(directions["down"])}`);
console.log(`> forward: ${sum(directions["forward"])}`);
console.log(
  `> U/D diff: ${difference(sum(directions["up"]), sum(directions["down"]))}`
);
console.log(`Answer: ${finalForward * finalDepth}`)

console.log("[--------------]");

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
