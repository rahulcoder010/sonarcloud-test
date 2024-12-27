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