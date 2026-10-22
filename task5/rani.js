let fruits = ["apple", "banana", "mango", "orange", "grapes"];
fruits.push("kiwi", "papaya", "guava");
console.log(fruits);
 
let numbers = [10, 20, 30, 40, 50, 60];
numbers.pop();
console.log(numbers);
 
let names = ["Rani", "chinni", "P", "gowda", "yokshit"];
names.shift();
console.log(names);
 
let nums = [30, 40, 50, 60];
nums.unshift(10, 20);
console.log(nums);
 
let arr1 = [10, 20, 30, 40, 50];
arr1.splice(1, 2);
console.log(arr1);
 
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1, 100);
console.log(arr2);
 
let arr3 = [10, 20, 30, 40, 50];
arr3.fill("hello", 2, 4);
console.log(arr3);
 
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a.concat(b));
 
let arr4 = [10, 20, 30, 40, 50, 60];
console.log(arr4.slice(1, 4));
 
let nestedArr = [1, [2, [3, [4, 5]]]];
console.log(nestedArr.flat(Infinity));
 
let arr5 = [10, 20, 30, 40, 50];
console.log(arr5.includes(30));
 
let arr6 = [5, 10, 15, 20, 25];
console.log(arr6.indexOf(20));
 
let arr7 = [1, 2, 3, 2, 1, 2];
console.log(arr7.lastIndexOf(2));
 
let arr8 = [50, 20, 10, 40, 30];
arr8.sort((a, b) => a - b);
console.log(arr8);
 
let arr9 = [1, 2, 3, 4, 5, 6, 7];
arr9.reverse();
console.log(arr9);
 
let x = [1, 2, 3, 4];
let y = [5, 6, 7, 8];
let merged = [...x, ...y];
console.log(merged);
 
let student = {
    name: "Rani",
    age: 24
};
 
let job = {
    role: "Developer",
    location: "Bengaluru"
};
 
let details = {...student, ...job};
console.log(details);
 
function getValues(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
 
getValues(10, 20, 30, 40, 50);
 
function one(a, b, ...c) {
    console.log(a + b + c[0] + c[1]);
}
 
one(10, 20, 30, 40);
 
let first = [10, 20, 30, 40];
let copy = [...first];
console.log(copy);
 
let arr10 = [10, 20, 30, 40];
let [v1, v2, v3, v4] = arr10;
console.log(v1, v2, v3, v4);
 
let nested = [1, 2, [3, 4, [5, 6]]];
let [n1, n2, [n3, n4, [n5, n6]]] = nested;
console.log(n1, n2, n3, n4, n5, n6);
 
let studentData = ["Rani", 24, 8.5];
let [studentName, studentAge, cgpa] = studentData;
console.log(studentName, studentAge, cgpa);
 
let employee = {
    name: "Rani",
    role: "Developer",
    location: "Bengaluru"
};
 
let {
    name: empName,
    role: empRole,
    location: empLocation
} = employee;
 
console.log(empName, empRole, empLocation);
 
let studentInfo = {
    name: "Rani",
    address: {
        city: "Bengaluru",
        state: "Karnataka"
    }
};
 
let {
    address: {city, state}
} = studentInfo;
 
console.log(city, state);
 
let person = {
    name: "Rani",
    role: "Developer",
    location: {
        mainLocation: "Bengaluru",
        currentLocation: "Bengaluru"
    }
};
 
let {
    name: personName,
    role: personRole,
    location: {mainLocation, currentLocation}
} = person;
 
console.log(personName, personRole, mainLocation, currentLocation);
 
let arr11 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arr11.shift();
arr11.pop();
arr11.unshift(5, 15);
console.log(arr11);
 
let arr12 = [10, 20, 30, 20, 40, 20, 50];
let value = 20;
 
console.log(arr12.includes(value));
console.log(arr12.indexOf(value));
console.log(arr12.lastIndexOf(value));
 
let employee1 = {
    name: "Rani",
    age: 24
};
 
let employee2 = {
    role: "Developer",
    location: "Bengaluru"
};
 
let employeeData = {...employee1, ...employee2};
let {name: finalName, role: finalRole} = employeeData;
 
console.log(finalName, finalRole);
 
let arr13 = [1, [2, 3], [4, [5, 6]], 7];
let result = arr13.flat(Infinity);
result.reverse();
console.log(result);