class Person{

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

let p = new Person('Anup','Kini'); 
console.log(p);

p.greetPerson();
p.getFullName(); // Normal member function

Person.staticMethod(); //Calling static method