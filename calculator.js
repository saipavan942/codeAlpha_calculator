let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function operatorClicked(op) {
  if (currentInput === '') return;  // Don't add operator without a number

  if (firstValue === '') {
    firstValue = currentInput;
    currentInput = '';
  }
  
  operator = op;
}

function calculateResult() {
  if (firstValue === '' || currentInput === '') return; // No calculation without both values

  secondValue = currentInput;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(firstValue) + parseFloat(secondValue);
      break;
    case '-':
      result = parseFloat(firstValue) - parseFloat(secondValue);
      break;
    case '*':
      result = parseFloat(firstValue) * parseFloat(secondValue);
      break;
    case '/':
      if (secondValue === '0') {
        alert('Cannot divide by 0');
        clearDisplay();
        return;
      }
      result = parseFloat(firstValue) / parseFloat(secondValue);
      break;
    default:
      return;
  }

  document.getElementById('display').value = result;
  firstValue = result;
  currentInput = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  firstValue = '';
  secondValue = '';
  operator = '';
  document.getElementById('display').value = '';
}
