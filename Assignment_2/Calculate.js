const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return 'Invalid operation';
  }
}

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      console.log(calculate(num1, num2, operation));
      rl.close();
    });
  });
});
