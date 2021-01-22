/*  JavaScript App */

const addForm = document.forms['app_form'];

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const number = document.querySelector('input[type="text"]').value;
  const result = document.querySelector('#result');

  let fact = num => {
    if (num === 0) {
      return 1
    } else {
      return num * fact(num - 1);
    }
  }
  
  let numberFact = fact(number);
  result.textContent = `Result: ${number}! = ${numberFact}`
});

