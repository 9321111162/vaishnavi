// Named Export
export class Person{

    firstName;
    lastName;

    constructor(firstName='',lastName=''){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetPerson(){
        console.log(`Good Morning, ${this.firstName}`);
    }

    getFullName(){
        console.log(`Name : ${this.firstName} ${this.lastName}`)
    }

    static staticMethod(){
        console.log(`static method`);
    }
}

export class Employee{

}

export function hello(){

}

export const PI = 3.14;