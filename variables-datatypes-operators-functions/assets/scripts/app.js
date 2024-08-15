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

function add() {
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
