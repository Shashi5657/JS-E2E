let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const calculateResult = (calculationType) => {
  let enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;

  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += parseInt(enteredNumber);
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= parseInt(enteredNumber);
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= parseInt(enteredNumber);
    mathOperator = "*";
  } else {
    currentResult /= parseInt(enteredNumber);
    mathOperator = "/";
  }
  createAndWriteOutput(initialResult, mathOperator, enteredNumber);
  createLog(calculationType, initialResult, enteredNumber, currentResult);
};
const createAndWriteOutput = (currentValue, operator, newValue) => {
  const calcDescription = `${currentValue} ${operator} ${newValue}`;
  outputResult(currentResult, calcDescription);
  userInput.value = null;
};

const createLog = (
  operationalIdentifier,
  prevResult,
  operationNumber,
  newResult
) => {
  const logEntry = {
    operation: operationalIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
};

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIV");
}

const clearAll = () => {
  currentResult = 0;
  outputResult(0, "");
};

addBtn.addEventListener("click", () => {
  if (userInput.value && userInput.value !== "0") {
    add();
  }
});
subtractBtn.addEventListener("click", () => {
  if (userInput.value && userInput.value !== "0") {
    subtract();
  }
});
multiplyBtn.addEventListener("click", () => {
  if (userInput.value && userInput.value !== "0") {
    multiply();
  }
});
divideBtn.addEventListener("click", () => {
  if (userInput.value && userInput.value !== "0") {
    divide();
  }
});
clearButton.addEventListener("click", clearAll);
