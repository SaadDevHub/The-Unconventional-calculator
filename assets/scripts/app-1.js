const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + (10 * 4) / 2;
let calcDescription = `${defaultResult} + \n (10 * 4) / 2`;

function add(a, b) {
  const result = a + b;
  return result;
}

outputResult(currentResult, calcDescription);

const math1 = add(5, 8);
const math2 = add(4, 2);

alert(math1);
alert(math2);
