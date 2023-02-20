/* USING ARRAYS INITIALIZING, PUSHING, EXTRACTING ELEMENTS. AND USE OBJECTS
 ADD A RE-USABLE FUNCTION TO USE OBJECTS (writeToLog())
*/
const OPERATION_ADD = "ADD";
const OPERATION_SUBTRACT = "SUBTRACT";
const OPERATION_MULTIPLY = "MULTIPLY";
const OPERATION_DIVIDE = "DIVIDE";

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationId, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    numberEntered: operationNum,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operation) {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  let operator;
  if (operation === OPERATION_ADD) {
    currentResult += enteredNum;
    operator = "+";
  } else if (operation === OPERATION_SUBTRACT) {
    currentResult -= enteredNum;
    operator = "-";
  } else if (operation === OPERATION_MULTIPLY) {
    currentResult *= enteredNum;
    operator = "*";
  } else if (operation === OPERATION_DIVIDE) {
    currentResult /= enteredNum;
    operator = "/";
  }
  createAndWriteOutput(operator, initialResult, enteredNum);
  writeToLog(operation, initialResult, enteredNum, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, OPERATION_ADD));
subtractBtn.addEventListener("click", calculate.bind(this, OPERATION_SUBTRACT));
multiplyBtn.addEventListener("click", calculate.bind(this, OPERATION_MULTIPLY));
divideBtn.addEventListener("click", calculate.bind(this, OPERATION_DIVIDE));

// function add() {
//   const enteredNum = getUserNumInput();
//   const initialResult = currentResult;
//   currentResult += enteredNum;
//   createAndWriteOutput("+", initialResult, enteredNum);
//   writeToLog("ADD", initialResult, enteredNum, currentResult);
// }

// function subtract() {
//   const enteredNum = getUserNumInput();
//   const initialResult = currentResult;
//   currentResult -= enteredNum;
//   createAndWriteOutput("-", initialResult, enteredNum);
//   writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
// }

// function divide() {
//   const enteredNum = getUserNumInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNum;
//   createAndWriteOutput("/", initialResult, enteredNum);
//   writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
// }

// function multiply() {
//   const enteredNum = getUserNumInput();
//   const initialResult = currentResult;
//   currentResult *= enteredNum;
//   createAndWriteOutput("*", initialResult, enteredNum);
//   writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
// }
