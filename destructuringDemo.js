// Array Destructuring
// Example 1
// let employee = ['John','Cena'];
// let [firstName,lastName,gender='Male'] = employee;
// console.log(`${firstName} ${lastName} ${gender}`);

// Example 2

// let employee2 = ['John','Cena','Male'];
// let [,gender2,] = employee2;
// console.log(`${gender2}`);

// Example 3
let employee3 = ['Anup','Kini','Male','He is Funny'];

let [firstName,lastName, ...elements] = employee3;
console.log(firstName);
console.log(lastName);
console.log(elements);

// Object Destructuring

let employee4 = {
    fname:"Anup",
    lname:"Kini",
    gender:'male'
}
   
let {fname:f, lname:l, gender:g} = employee4;
console.log(`${f} ${l} ${g}`);

// Example 4
// Array Destructuring and Object Destructuring
let employeeArr = [
    {   // emp1
        fname:"Anup",
        lname:"Kini",
        gender:'male'
    },
    {   // emp2
        fname:"John",
        lname:"Cena",
        gender:'male'
    }
];

let[emp1, {fname:f2,lname:l2,gender:g2}] = employeeArr;

console.log(f2);
console.log(l2);
console.log(g2);
