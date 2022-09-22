let user = "Anup";
let sirname = " Kini";

let greet = `Welcome 'single quotes' "double quotes"
             ${user.concat(sirname)} to ES6
             this is third line
             this is fourth line`;

console.log(greet); 

let id = 1;
let name = 'ABC1234';
let url = "http://localhost:3000/users/"+id+"/"+name;

let url2=`http://localhost:3000/users/${id}/${name}`;

console.log(url);
console.log(url2);