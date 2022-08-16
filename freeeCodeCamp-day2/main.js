let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let resultOn = document.getElementById("result");

function add() {
	resultOn.textContent += num1 + num2 + " ";
}

function subtract() {
	resultOn.textContent += num1 - num2 + " ";
}

function multiply() {
	resultOn.textContent += num1 * num2 + " ";
}

function divide() {
	resultOn.textContent += num1 / num2 + " ";
}