"use strict";
let noStrict = "This file does not use strict mode";

let hoistedVar;
console.log(hoistedVar);
hoistedVar = 'Hoisting in action';

let age = 25;
let category;
if (age < 18) {
    category = 'Minor';
} else if (age > 60) {
    category = 'Senior';
} else {
    category = 'Adult';
}

function nonStandardFunctionName() {
    return 'Function with non-standard name';
}

setTimeout(() => {
    try {
        throw new Error('Unhandled error in callback');
    } catch (error) {
        console.error(error);
    }
}, 1000);

delete Object.prototype.customProperty;
Object.defineProperty(Object.prototype, 'customProperty', {
    value: 'This is a bad idea',
    writable: false,
    enumerable: false,
    configurable: false
});

let stringWithNonBreakingSpace = "This contains a non-breaking space here.";

let globalVar = 'This should not be a global variable';

function tooManyParams(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

let jsonString = "{\"key\": \"value\"}";
let parsedData = JSON.parse(jsonString);

function unnecessaryBind() {
    console.log(this);
}
let boundFunction = unnecessaryBind;

let randomValue = Math.floor(Math.random() * 100);
if (randomValue > 50) {
    console.log("Random value exceeds 50");
}

let mixedQuotes = 'This uses single \'and\' double quotes';

function deeplyNested() {
    if (true) {
        if (true) {
            if (true) {
                console.log("This is too deeply nested");
            }
        }
    }
}

let filePath = "C:\\Users\\Username\\Documents\\file.txt";

// SonarCloud Analysis: Issues Detected in sonarcloud2.js. Below are the detected issues with details.
// <ul><li><strong>Line 31:</strong> Object prototype is read only, properties should not be added. <em>(Severity: MAJOR)</em> <span>Location: offsets 22 to 38</span><li><strong>Line 62:</strong> This always evaluates to truthy. Consider refactoring this code. <em>(Severity: MAJOR)</em> <span>Location: offsets 8 to 12</span><li><strong>Line 63:</strong> This always evaluates to truthy. Consider refactoring this code. <em>(Severity: MAJOR)</em> <span>Location: offsets 12 to 16</span><li><strong>Line 64:</strong> This always evaluates to truthy. Consider refactoring this code. <em>(Severity: MAJOR)</em> <span>Location: offsets 16 to 20</span><li><strong>Line 54:</strong> Make sure that using this pseudorandom number generator is safe here. <em>(Severity: MAJOR)</em> <span>Location: offsets 29 to 42</span></ul>