/*
   Filename: complex_code_example.js

   Description: This code example demonstrates a sophisticated and elaborate JavaScript program.
   It consists of multiple complex functions and uses advanced coding techniques.

   Note: This code does not serve any practical purpose and is created solely for the purpose
   of showcasing complex JavaScript code.

*/

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate Fibonacci sequence up to a certain length
function generateFibonacci(length) {
  const fibSequence = [0, 1];
  for (let i = 2; i < length; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }
  return fibSequence;
}

// Function to convert an array of strings to uppercase
function convertToUppercase(array) {
  return array.map(str => str.toUpperCase());
}

// Function to calculate the sum of all even numbers below a given limit
function calculateEvenSum(limit) {
  let sum = 0;
  for (let i = 0; i < limit; i += 2) {
    sum += i;
  }
  return sum;
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Complex object with nested properties
const complexObject = {
  propA: 'Hello',
  propB: {
    subPropA: 42,
    subPropB: [1, 2, 3]
  },
  propC: function() {
    console.log('Complex object method in action!');
  }
};

// Async function to simulate an API call with a delay
async function simulateAPICall() {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'API data' });
    }, 2000);
  });

  return response.data;
}

// Class to represent a complex mathematical calculation
class ComplexCalculation {
  constructor(value) {
    this.value = value;
  }

  performCalculation() {
    return Math.pow(this.value, 2) * Math.PI;
  }
}

// Example usage of the above functions and objects
console.log(factorial(5));
console.log(isPrime(13));
console.log(generateFibonacci(10));
console.log(convertToUppercase(['apple', 'banana', 'cherry']));
console.log(calculateEvenSum(10));
console.log(reverseString('Hello, World!'));

complexObject.propC();

simulateAPICall().then(data => console.log(data));

const calculation = new ComplexCalculation(5);
console.log(calculation.performCalculation());