import { calledNumbersArray, bingoCards } from "./input4.js";

calledNumbersArray.forEach(calledNumber =>{
    console.log(calledNumber);
});

function checkForValue(inputValue, inputBingoCard) {
    // See if a Bingo Card has a given value
    return true;
}

class BingoCard {
    constructor(inputMatrix) {
        this.matrix = inputMatrix;
        this.allValues = [].concat(...inputMatrix);
        this.winningScoreArray = []
    }
    getAt(x,y) {
        return this.matrix[x + 1][y + 1]
    }
    scoreAt(x,y) {
        this.matrix[x + 1][y + 1] = "X";
    }
    hasValue(inputValue) {
        return this.allValues.includes(inputValue);
    }
    toString(){
        let output = "[";
        this.matrix.forEach((row, rowIndex) => {
          row.forEach((colValue, colIndex) => {
              output += `this.matrix[rowIndex][colIndex],`;
          });
          output += `\n`;
        });
        output += "]";
        return output;
    }
}
