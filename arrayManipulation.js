// arrayManipulation.js

function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const strings = ['Hello', 'World', 'JavaScript', 'is', 'fun'];
// const processedNumbers = processArray(numbers);
// const formattedStrings = formatArrayStrings(strings, processedNumbers);
// console.log(formattedStrings); // ['hello', 'WORLD', 'javascript', 'IS', 'fun']
