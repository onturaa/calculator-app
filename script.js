let number1 = '';
let operator = '';
let number2 = '';
const MAX_LENGTH = 20;


function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
    }
}

const display = document.querySelector(".display");

const numBtns = document.querySelectorAll('.number-btn');

numBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            if (number1.length < MAX_LENGTH) {
                display.textContent += button.textContent;
                number1 += button.textContent;
            }
        }
        else {
            if (display.textContent === operator) {
                display.textContent = button.textContent;
                number2 += button.textContent;
            } else {
                if (number2.length < MAX_LENGTH) {
                    display.textContent += button.textContent;
                    number2 += button.textContent;
                }
            }
        }
    });
});

const operateBtns = document.querySelectorAll(".operator-btn");

operateBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (number2 === '') {
            if (number1 === '') {
                number1 = '0';
            }
            display.textContent = button.textContent;
            display.style.textAlign = "right";
            operator = button.textContent;
        }
    });
});

const clear = document.querySelector("#clear-btn");

clear.addEventListener('click', () => {
    display.textContent = "";
    number1 = '';
    number2 = '';
    operator = '';
});

const enter = document.querySelector('#enter-btn');

enter.addEventListener('click', () => {
    if (number1 !== '' && operator !== '' && number2 !== '') {
        display.textContent = operate(operator, number1, number2);
        number1 = display.textContent;
        operator = '';
        number2 = '';
    }
});