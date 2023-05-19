let firstNum = 8;
let secondNum = 2;
let sum = 0;

document.getElementById("num1-el").textContent = firstNum;
document.getElementById("num2-el").textContent = secondNum;

let sum_element = document.getElementById("sum-el");

function add() {
    sum = firstNum + secondNum;
    sum_element.textContent += sum;
}

function subtract() {
    sum = firstNum - secondNum;
    sum_element.textContent += sum;
}

function divide() {
    sum = firstNum / secondNum;
    sum_element.textContent += sum;
}

function multiply() {
    sum = firstNum * secondNum;
    sum_element.textContent += sum;
}

function clear_sum_field() {
    sum_element.textContent = "";
}