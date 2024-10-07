// 1. Function to print a welcome message
export function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College!`);
}

// 2. Function to convert Celsius to Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Function to calculate factorial
export function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 4. Function to calculate the nth Fibonacci number
export function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
