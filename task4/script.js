
// PART 1: FUNCTIONS AND PARAMETERS


// 1
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

// 2
function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Rani", 24, 8.5);
studentDetails("Priya", 21, 9.0);

// 3
function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(200000);
console.log("Student Fee:", studentFee);

// 4
function discount(percent) {
    let fee = 200000;
    let discountAmount = (fee * percent) / 100;
    let finalFee = fee - discountAmount;

    console.log("Final Fee:", finalFee);
}

discount(10);

// 5
function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}

studentForm("Rani", 24, "no");
studentForm("Priya", 21, "yes");
studentForm("Kavya", 23);


// PART 2: FUNCTION TYPES AND SCOPE


// 1
function displayMessage(message) {
    console.log(message);
}

displayMessage("Welcome to JavaScript");

// 2
let displayName = function(name) {
    console.log("Name:", name);
};

displayName("Rani");

// 3
let displayNumber = (number) => {
    console.log("Number:", number);
};

displayNumber(100);

// 4
function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:");
        console.log("var:", a);
        console.log("let:", b);
        console.log("const:", c);
    }

    console.log("Outside block var:", a);

    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
}

checkScope();

// 5
console.log(value);
var value = 10;



// PART 3: CALLBACK & HIGHER-ORDER FUNCTIONS


// 1
function first(callback) {
    console.log("First function");
    callback();
}

function second() {
    console.log("Second function");
}

first(second);

// 2 and 3
function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}

const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

add(sub, 20, 10);

// 4
function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback(a, b);
}

multiply(sub, 20, 10);

// 5
function divide(num1, num2) {
    console.log("Division:", num1 / num2);
}

function calculate(callback, a, b) {
    callback(a, b);
}

calculate(divide, 20, 5);

// 6
function student(callback) {
    callback("Rani");
}

function showStudent(name) {
    console.log("Student Name:", name);
}

student(showStudent);


// PART 4: GENERATOR FUNCTIONS

// 1 and 2
function* cashbackGenerator() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashback = cashbackGenerator();

console.log(cashback.next());
console.log(cashback.next());
console.log(cashback.next());

// 3
function* discounts() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "40% Discount";
    yield "50% Discount";
}

for (let message of discounts()) {
    console.log(message);
}

// 4
function* studentNames() {
    yield "Rani";
    yield "Priya";
    yield "Kavya";
}

for (let name of studentNames()) {
    console.log(name);
}

// 5
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

let numGenerator = numbers();

console.log(numGenerator.next());
console.log(numGenerator.next());
console.log(numGenerator.next());
console.log(numGenerator.next());
console.log(numGenerator.next());



// PART 5: CURRYING AND UNCURRYING


// 1
function addThree(a, b, c) {
    console.log("Sum:", a + b + c);
}

addThree(5, 10, 15);

// 2
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// 3
console.log("Curried Sum:", curriedAdd(5)(10)(15));

// 4
function productPrice(price) {
    return function(discountPercent) {
        return function(quantity) {
            let discountAmount = (price * discountPercent) / 100;
            let discountedPrice = price - discountAmount;

            return discountedPrice * quantity;
        };
    };
}

let totalPrice = productPrice(1000)(10)(2);
console.log("Total Discounted Price:", totalPrice);

// 5
function normalMultiply(a, b, c) {
    return a * b * c;
}

function curriedMultiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

let normalResult = normalMultiply(2, 3, 4);
let curriedResult = curriedMultiply(2)(3)(4);

console.log("Normal Result:", normalResult);
console.log("Curried Result:", curriedResult);
console.log("Same Result:", normalResult === curriedResult);


// PART 6: IIFE, RETURN & MIXED PRACTICE


// 1
(function(productName, discountPercent) {
    console.log(
        `${productName} is available with ${discountPercent}% discount`
    );
})("Laptop", 20);

// 2
function getNumber() {
    return 100;
}

let returnedNumber = getNumber();
console.log("Returned Number:", returnedNumber);

// 3
function getMarks(marks) {
    return marks;
}

let marks = getMarks(85);
let studentMarks = marks;

console.log("Student Marks:", studentMarks);

// 4
function calculateDiscount(fee, percent) {
    return (fee * percent) / 100;
}

function studentFeeCalculator(
    fee = 200000,
    discountPercent = 10,
    callback = calculateDiscount
) {
    let discountAmount = callback(fee, discountPercent);
    let finalFee = fee - discountAmount;

    return finalFee;
}

let finalStudentFee = studentFeeCalculator(
    200000,
    10,
    calculateDiscount
);

console.log("Final Student Fee:", finalStudentFee);