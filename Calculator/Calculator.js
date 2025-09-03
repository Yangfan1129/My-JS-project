const displayEl = document.querySelector(".display");
let expression = "";

function UpdateCalculate(value) {
  expression += value;

  displayEl.innerText = expression.replace(/\*/g, "×").replace(/\//g, "÷");
}

function Calculate() {
  displayEl.innerHTML = eval(expression);
  expression = "";
}

function Clear() {
  expression = "";
  displayEl.innerHTML = expression;
}
