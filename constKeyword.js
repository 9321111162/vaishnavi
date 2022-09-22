// Example 1
let num1;
num1 = 20;

const num2 = 20;
// num2 = 39; // Reassignment is not possible

// Example 2

const obj1 = {
    name:'Anup'
}

obj1.name = "Geeta";
//obj1 = {}; // Error
console.log(obj1.name);

// Difference Between let vs const
let num3;
num3 = 10;
// Vs
const num4 = 30;

let obj2 = {
    name:"Anup",
    address:"Pune"
}

obj2 = {};
console.log(obj2);

