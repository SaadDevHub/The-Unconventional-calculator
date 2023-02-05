/* USING ARRAYS INITIALIZING, PUSHING, EXTRACTING ELEMENTS. AND USE OBJECTS
 ADD A RE-USABLE FUNCTION TO USE OBJECTS (writeToLog())
*/

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

function add() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteOutput("+", initialResult, enteredNum);
  writeToLog("ADD", initialResult, enteredNum, currentResult);
}

function subtract() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createAndWriteOutput("-", initialResult, enteredNum);
  writeToLog("SUBTRACT", initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createAndWriteOutput("/", initialResult, enteredNum);
  writeToLog("DIVIDE", initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserNumInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createAndWriteOutput("*", initialResult, enteredNum);
  writeToLog("MULTIPLY", initialResult, enteredNum, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
