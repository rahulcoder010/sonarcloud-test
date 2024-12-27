// Faulty JavaScript File - Created for Testing Code Scanners

// 1. Unused variable
// let unusedVar = 42;

// 2. Undeclared variable usage
let undeclaredVar = 'This variable is not declared';

// 3. Duplicate variable declaration
let duplicateVar = 10;
// let duplicateVar = 20;

// 4. Missing semicolon
let missingSemicolon = 'This line is missing a semicolon';

// 5. Improper indentation
function poorlyIndented() {
    if (true) {
        console.log("Improper indentation");
    }
}

// 6. Use of eval()
// eval("let x = 10;");

// 7. Use of == instead of ===
if (5 === "5") {
    console.log("Loose equality used");
}

// 8. Function declared but never used
// function unusedFunction() {
//     return 'I am never called';
// }

// 9. Console log left in production code
// console.log('Debugging log left in code');

// 10. Hardcoded credentials
const apiKey = '12345-abcde';

// 11. Improper use of strict mode
function noStrictMode() {
    "use strict";
    let undeclaredStrictVar = 100; // This should throw an error but won't due to improper placement
}

// 12. Infinite loop
// while (true) {
//     console.log("This is an infinite loop");
//     break; // Break added just for sanity during execution, remove to simulate the real fault
// }

// 13. Magic numbers
const threshold = 50;
let price = 99.99;
if (price > threshold) {
    console.log("Price exceeds threshold");
}

// 14. Shadowed variable
let shadowVar = 10;
function shadowExample() {
    let shadowVarInner = 20;
    console.log(shadowVarInner); // Shadows the outer shadowVar
}

// 15. Inconsistent naming conventions
let snake_case_var = 'snake case';
let camelCaseVar = 'camel case';