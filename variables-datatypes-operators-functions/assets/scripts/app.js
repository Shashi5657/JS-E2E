// // alert("This is from the app.js file");
// const defaultResult = 0;
// let currentResult = defaultResult;

// function addNumbers(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// addNumbers(10, 12);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// let calculationDescription = `(${defaultResult} + 10) * 3/2 - 1`;

// outputResult(currentResult, calculationDescription);

let defaultResult = 0;
let currentResult = defaultResult;

const createAndWriteOutput = (currentValue, operator, newValue) => {
  const calcDescription = `${currentValue} ${operator} ${newValue}`;
  outputResult(currentResult, calcDescription);
  userInput.value = null;
};

function add() {
  let enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult += parseInt(enteredNumber);
  createAndWriteOutput(initialResult, "+", enteredNumber);
}

function subtract() {
  let enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult -= parseInt(enteredNumber);
  createAndWriteOutput(initialResult, "-", enteredNumber);
}

function multiply() {
  let enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult *= parseInt(enteredNumber);
  createAndWriteOutput(initialResult, "*", enteredNumber);
}

function divide() {
  let enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult /= parseInt(enteredNumber);
  createAndWriteOutput(initialResult, "/", enteredNumber);
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
