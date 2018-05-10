const NUMBERS = document.querySelectorAll('.number');
const OPERATORS = document.querySelectorAll('.operator')
const INPUT = document.querySelector('.display');
const SYM_INPUT = document.querySelector('.symbol');

let check = false, num1 = '', num2 = '', oper = '';


NUMBERS.forEach(num => num.addEventListener('click', () => {
  if (!check) {
    num1 = INPUT.value += num.value;
  } else {
    num2 += num.value;
    INPUT.value = num2;
  }
}));

OPERATORS.forEach(x => x.addEventListener('click', () => {
  if (!check) {
    oper = SYM_INPUT.value = x.value;
    check = true;
  } else {
    oper = SYM_INPUT.value = x.value;
    INPUT.value = operate(oper, num1, num2);
  }
}));

let clearEntry = () => {
  let current = INPUT.value;
  if (!check) {
    num1 = INPUT.value = current.slice(0, -1);
  } else {
    num2 = INPUT.value = current.slice(0, -1);
  }
}

let reset = () => {
  INPUT.value = ''; 
  SYM_INPUT.value = '';
  num1 = '', num2 = '';
  check = false;
}


let equals = (x) => {
  if (SYM_INPUT.value == "=") return;
  SYM_INPUT.value = x;
  INPUT.value = operate(oper, num1, num2);
  num1 = INPUT.value;
  num2 = '';
  check = false;
}

let operate = (oper, a, b) => {
  switch (oper) {
    case '+':
      return parseFloat(a) + parseFloat(b);
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;
    case '/':
      return a / b;
  }
}

let show = () => {
  return `num1: ${num1}\nnum2: ${num2}`
}