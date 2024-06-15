// Objects: It is a unique entity that contains some properties methods.

// 1. Object Literal
// 2. Object Constructor
// 3. Object create()

// Classes: Classes are blueprints of an Object.

// Abstraction: It means displaying only the essential information and hiding the details.
// Encapsulation: The process of wraping prperties and functions within a single unit 


              /********  OBJECT LITERAL *********/

// let person = {
//     firstName: "Anurag",
//     LastName: "Mishra",


//     getFullName: function(){
//         return `The name of the person is ${person.firstName} ${person.LastName}`;
//     },

//     phoneNumber: {
//         mobile: "12345",
//         landline: "6789",
//     }
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);



/********** OBJECT CONSTRUCTOR ***********/

// function person(firstname, lastName){
//     this.firstName = firstname;
//     this.lastName = lastName;
// }

// let p1 = new person("Anurag", "Mishra");
// let p2 = new person("Hardik", "Arora");

// console.log(p1.firstName);
// console.log(`${p2.firstName} ${p2.lastName}`);



/********** OBJECT CREATE() ***********/


const coder = {
    isStudying:false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am i studying?: ${this.isStudying} `);
    }
}

const me = Object.create(coder);
me.name = "Anurag Mishra";
me.isStudying=true;


me.printIntroduction();



class Vehicle {
    constructor(name, maker, engine){
        this.name= name;
        this.maker=maker;
        this.engine=engine;
    }

    getDetails(){
        return `the name of the vehicle is ${this.name}`;
    }
}

let v1 = new Vehicle("Creta","Hyundai","2500cc");
let v2 = new Vehicle("Q5","Audi","3000cc");


console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());



function Vehicle(name,maker,engine){
    this.name=name;
    this.maker=maker;
    this.engine=engine;
}

Vehicle.prototype.getDetails = function(){
    return `the name of the vehicle is ${this.name}`
}

let v3 = new Vehicle("Creta","Hyundai","2500cc");
let v4 = new Vehicle("Q5","Audi","3000cc");


console.log(v3.name);
console.log(v4.maker);
console.log(v3.getDetails());



class Person{
    constructor(name, id){
        this.name= name;
        this.id = id;
    }

    addAdddress(newAddress){
        this.address = newAddress;
    }

    getDetails(){
        console.log(`Name is : ${this.name}, and address is: ${this.address}`);
    }

    
}

let p1 = new Person("Anurag",24);
p1.addAdddress("Kolkata");
p1.getDetails();