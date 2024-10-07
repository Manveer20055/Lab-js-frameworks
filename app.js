// Importing the functions from utils.js using ES modules
import { welcomeMessage, convertCelsiusToFahrenheit, factorial, fibonacci } from 'C:\Users\Jashan\Lab2-JS-frameworks\utils.js';

// Calling the functions and printing the results
welcomeMessage('John', 'Doe');
console.log(`25°C is equal to ${convertCelsiusToFahrenheit(25)}°F`);
console.log(`Factorial of 5 is ${factorial(5)}`);
console.log(`The 6th Fibonacci number is ${fibonacci(6)}`);


// 1. Call the welcomeMessage function
welcomeMessage('John', 'Doe');

// 2. Call the convertCelsiusToFahrenheit function
const celsius = 25;
const fahrenheit = convertCelsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// 3. Call the factorial function
const num = 5;
const factResult = factorial(num);
console.log(`Factorial of ${num} is ${factResult}`);

// 4. Call the fibonacci function
const n = 6;
const fibResult = fibonacci(n);
console.log(`The ${n}th Fibonacci number is ${fibResult}`);
