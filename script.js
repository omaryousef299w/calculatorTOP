let currentValue = '';
let previousValue = ''; 
let operator = ''; 

document.addEventListener("DOMContentLoaded", function () {
  // Getting all the required elements
  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");
  let equal = document.getElementById('equal'); 
  let clearBtn = document.getElementById('clear-btn'); 
  let previousScreen = document.querySelector('.previous-value'); 
  let currentScreen = document.querySelector('.current-value'); 

  // Numbers event listener
  numbers.forEach((num) => num.addEventListener("click", function(e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  }));

  // Operators event listener
  operators.forEach((op) => op.addEventListener("click", function(e) {
    handleOperator(e.target.textContent); 
    previousScreen.textContent = previousValue + " " + operator; 
    currentScreen.textContent = currentValue; 
  }));

  // Equal button event listener
  equal.addEventListener("click", function() {
    if (currentValue !== '' && operator !== '') {
      calculate(); 
      previousScreen.textContent = ''; 
      currentScreen.textContent = currentValue; 
      operator = ''; // Clear operator after calculation
    }
  });

  // Clear button event listener
  clearBtn.addEventListener("click", function() {
    currentValue = '';
    previousValue = ''; 
    operator = ''; 
    previousScreen.textContent = ''; 
    currentScreen.textContent = '0'; 
  });
});

// Number function
function handleNumber(num) {
  if (currentValue.length < 5) {
    currentValue += num;
  }
}

// Operator function
function handleOperator(op) {
  if (currentValue === '') return; // Do nothing if currentValue is empty

  if (previousValue !== '' && operator !== '') {
    calculate(); // Perform calculation if there's already a previous value and operator
  }

  operator = op; 
  previousValue = currentValue; 
  currentValue = '';
}

// Calculate function
function calculate() {
  if (currentValue === '' || previousValue === '' || operator === '') return;

  currentValue = Number(currentValue); 
  previousValue = Number(previousValue); 

  if (operator === "+") {
    previousValue += currentValue; 
  } else if (operator === "-") {
    previousValue -= currentValue; 
  } else if (operator === "x") {
    previousValue *= currentValue; 
  } else if (operator === "÷") {
    previousValue /= currentValue; 
  }

  currentValue = previousValue; // Update currentValue to the result for further operations
  previousValue = ''; // Clear previousValue to prepare for new calculation
}
