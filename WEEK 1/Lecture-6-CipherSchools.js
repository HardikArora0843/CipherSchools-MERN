
var x =15;

{
    let x =5;
    console.log(x);
}

console.log(x);



var x = function (x,y){
    return x+y;
}

console.log(x(5,6));



const y = (a,b) => {
    return a + b;
}

console.log(y(5,6));



// SPREAD OPERATOR


const q1 = ["Jan","Feb","Mar","Apr"];
const q2 = ["May","Jun","Jul","Aug"];
const q3 = ["Sep","Oct","Nov","Dec"];
const q4 = ["1","2","3","4"];

const year = [...q1,...q2,...q3,...q4];       // all combined will come

console.log(year);



// for - of loop

var num = [25, 77, 57, -1];

let sum=0;

for(let n of num){
    sum+=n;
}

console.log(sum);      // 158




// MAP   - it maps text with numbers


const fruits = new Map([

    ["apple",200],
    ["banana",300],
    ["mango",500]

]);

console.log(fruits);

console.log(fruits.get("mango"));



// SETS


const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("a");


console.log(letters);
console.log(letters);




// OBJECTS


const person = {
    firstName: "John",
    LastName: "Doe",
    age: 30,
    eyecolor:"blue",
};

console.log(person);



// DEFAULT PARAMETER


const addTwoNumbers = (a,b = 20) => a + b;

console.log(addTwoNumbers(10));




// REST OPERATOR

const addNumbers = (...args) => {                 // by rest operator jitne bhi arguments de do consider kar lega
    let sum = 0;
    for(let arg of args){
        sum+=arg;
    }

    return sum;
}

console.log(addNumbers(10,2,34,17,3,-1,-29,34));

