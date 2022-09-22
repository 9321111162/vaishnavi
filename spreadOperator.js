let displayColors = function(message, ...colors){  //Rest parameter must be last formal parameter
    console.log(message);
    for(let i in arguments){
        console.log(colors[i]);
    }  
}
    
let message = 'List of Colors';
let colorArray = ['Orange','Yellow','Indigo','pink'];
displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');

//Example 1 of Spread operator
displayColors(message,...colorArray);

// Example 2 of Spread Operator
let str = "Anup Kini";
let charArr = {...str};
console.log(charArr[3]);

//Example 3 of Spread Operator

let obj = [
   { name:"Anup",
     address:"Pune",
     company:"Mphasis"
   }, 
   { name:"Nikhil",
     address:"Bangalore",
     company:"Biocon"
   } 
]


let arr = {...obj};
console.log(arr[1]);