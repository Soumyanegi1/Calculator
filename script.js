let currentInput = '0';

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendCharacter(char) {
    if (currentInput === '0') {
        currentInput = char;
    } else {
        currentInput += char;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}
