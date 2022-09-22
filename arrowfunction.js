let getRegularValue = function(){
    return 10;
}

console.log(getRegularValue());

// Example 1
const getArrowValue = () => 10;
console.log(getArrowValue());

// Example 2
const getArrowValue2 = (m,bonus) => 10 * m + bonus;
console.log(getArrowValue2(5,50));

// this keyword Example 3

// var employee = {
//    id:1,
//    greet: function(){
//       setTimeout(
//            () => {
//                console.log(this.id);
//            },
//           1000
//       )
//    }
// }


var employee = {
    id:1,
    greet: function(){
        setTimeout(
            () => {
                console.log(this.id);
            },
            1000
        )
    }
}

employee.greet();