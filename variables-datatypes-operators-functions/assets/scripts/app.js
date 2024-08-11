// alert("This is from the app.js file");
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3/2 - 1`;

outputResult(currentResult, calculationDescription);
