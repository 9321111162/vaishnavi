// Example 1 - Hoisting
function greetPerson(name){

    let greet;
    if(name === 'Anup'){
         greet = 'Hello'+name;
    }else{
         greet = 'Hi There!!';
    }
    
    console.log(greet);
    // let greet; // This variable cannot be hoisted..

}

// greetPerson('kini');
// Example 2 - Scopes
var a = 1;
var b = 2;

if( a === 1){
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);

// Example 3 - Declaration
// var c = 1;
// var c = 2; // var can be redeclared

// let d = 1;
// let d = 2; // let cannot be redeclared

// Example 4 - For Loop

for(let i = 1 ; i <= 5 ; i++){
    setTimeout(
        function(){
            console.log(i);
        },
        1000
    )
} 