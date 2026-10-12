//Part:1//

// Q1
var num1 = 10;
num1 = 20;
console.log("Q1 Result:", num1); 
// Q2
var num2 = 30;
var num2 = 50;
console.log("Q2 Result:", num2);
// Q3
let num3 = 100;
num3 = 200;
console.log("Q3 Result:", num3);
// Q4
const myAge = 24;
console.log("Q4 Result:", myAge);
// Q5
console.log("Q5 Validity: var and let allow reassignment (let does not allow redeclaration in the same scope, var does). const does not allow reassignment or redeclaration.");
// Q6
var fullname = "Rani";
let age = 24;
const city = "vijayapur";
console.log("Q6 Results - Name:", fullname, "| Age:", age, "| City:", city);

//Part:2//

// Q7
 const userName = prompt("Rani:");
  alert(userName);
//Q8
  const userAge = prompt("24:");
  console.log("8.", userAge);
// Q9
 const knowsJavaScript = confirm("Do you know JavaScript?");
  console.log("9.", knowsJavaScript);
// Question 10
  const stringValue = "JavaScript";
  const numberValue = 42;
  const booleanValue = true;
  const undefinedValue = undefined;
    console.log("10.", stringValue, typeof stringValue);
  console.log("   ", numberValue, typeof numberValue);
  console.log("   ", booleanValue, typeof booleanValue);
  console.log("   ", undefinedValue, typeof undefinedValue);
   // Question 11
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  console.log("11. Entire array:", fruits);
  console.log("    First element:", fruits[0]);
  console.log("    Last element:", fruits[fruits.length - 1]);
    // Question 12
  const items = {
    fruits: ["Apple", "Banana", "Mango"],
    electronicItems: ["Laptop", "Phone", "Tablet"],
    vegetable: "Carrot"
  };

  console.log("12. Fruits:", items.fruits);
  console.log("    Electronic items:", items.electronicItems);
  console.log("    Vegetable:", items.vegetable);

//Part:3//


   // Question 13
  const firstNumber = 15;
  const secondNumber = 4;

  console.log("13. Addition:", firstNumber + secondNumber);
  console.log("    Subtraction:", firstNumber - secondNumber);
  console.log("    Multiplication:", firstNumber * secondNumber);
  console.log("    Division:", firstNumber / secondNumber);
    // Question 14
  console.log("14. Remainder:", 27 % 5);
   // Question 15
  console.log("15. Exponentiation:", 3 ** 4);
    // Question 16
  let incrementValue = 10;
  console.log("16. Pre-increment:", ++incrementValue);
    // Question 17
  let decrementValue = 10;
  console.log("17. Pre-decrement:", --decrementValue);
   // Question 18
  let x = 5;
  let y = x++;

  console.log("18. x:", x);
  console.log("    y:", y);

//Part:4//


    // Question 19
  let a19 = 4;

  console.log("19.", a19++);
  console.log("    ", a19);

  // Question 20
  let a20 = 4;

  console.log("20.", ++a20);
  console.log("    ", a20);

  // Question 21
  let a21 = 8;
  let b21 = a21++;

  console.log("21. a:", a21);
  console.log("    b:", b21);

  // Question 22
  let a22 = 8;
  let b22 = ++a22;

  console.log("22. a:", a22);
  console.log("    b:", b22);

  // Question 23
  let a23 = 6;
  let b23 = a23--;

  console.log("23. a:", a23);
  console.log("    b:", b23);

  // Question 24
  let a24 = 6;
  let b24 = --a24;

  console.log("24. a:", a24);
  console.log("    b:", b24);

  // Question 25
  let a25 = 2;

  a25++;
  a25++;

  console.log("25.", a25);

  // Question 26
  let a26 = 10;

  --a26;
  --a26;

  console.log("26.", a26);

  // Question 27
  let b27 = 3;

  b27 = b27++;

  console.log("27.", b27);

  // Question 28
  let c28 = 4;
  let d28 = c28++;

  console.log("28. c:", c28);
  console.log("    d:", d28);

  // Question 29
  let e29 = 5;
  let f29 = --e29;

  console.log("29. e:", e29);
  console.log("    f:", f29);

  // Question 30
  let a30 = 5;
  let b30 = a30++;
  let c30 = ++a30;

  console.log("30. a:", a30);
  console.log("    b:", b30);
  console.log("    c:", c30);

