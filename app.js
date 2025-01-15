const defaultValue = 0;
let currentValue = defaultValue;

function parseUserNumber() {
  return parseInt(userInput.textContent);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = parseUserNumber();
  const initialValue = currentValue;
  currentValue += enteredNumber;
  createAndWriteOutput("+", initialValue, enteredNumber);
}
function subtract() {
  const enteredNumber = parseUserNumber();
  const initialValue = currentValue;
  currentValue -= enteredNumber;
  createAndWriteOutput("-", initialValue, enteredNumber);
}
function divide() {
  const enteredNumber = parseUserNumber();
  const initialValue = currentValue;
  currentValue /= enteredNumber;
  createAndWriteOutput("/", initialValue, enteredNumber);
}
function multiply() {
  const enteredNumber = parseUserNumber();
  const initialValue = currentValue;
  currentValue *= enteredNumber;
  createAndWriteOutput("*", initialValue, enteredNumber);
}

function reset() {
  const enteredNumber = parseUserNumber();
  const initialValue = currentValue;
  currentValue = 0;
  createAndWriteOutput("C", initialValue, enteredNumber);
}

addBtn.addEventListener("click", add);
