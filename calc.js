// Get the display element
const display = document.getElementById('display');

// Get the buttons elements
const buttons = document.querySelectorAll('.buttons button');

// Initialize the calculator state
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Add event listeners to the buttons
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		switch (button.id) {
			case 'clear':
				currentNumber = '';
				previousNumber = '';
				operator = '';
				display.value = '';
				break;
			case 'backspace':
				currentNumber = currentNumber.slice(0, -1);
				display.value = currentNumber;
				break;
			case 'equals':
				const result = eval(`${previousNumber} ${operator} ${currentNumber}`);
				display.value = result;
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				previousNumber = currentNumber;
				currentNumber = '';
				operator = button.textContent;
				break;
			default:
				currentNumber += button.textContent;
				display.value = currentNumber;
		}
	});
});
