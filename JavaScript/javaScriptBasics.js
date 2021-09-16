//Data types

let name = 'Babu Reddy'
let age = 25

let color = 'Red'

console.log(name+' and age'+age)
console.log(color)

let range = 4;
range = 5;
console.log(range);

//Constents

const range1 = 8;
//range1 =6;

console.log(range1)

const numberOfDays = 7;
console.log(numberOfDays);

/*
1. Primitve data types
    > String 
    > Number
    > Boolean
    > Undefined
    > Null
*/

let s = 'Hello';
let num =30;
let flag = true;
let isActive = false;
let model = null
let wheels = undefined;
let price;


//Dynamic typing

let d = 'Babu';
d=30;

/*
2. Reference type
    > Objects
    > Arrays
    > Functions

*/

//Objects:
        //Object which is un defined

let user = {

    name:  "Babu",
    age: 30

}; 

console.log(user)

//How to use properties
    //1. Using . nptation   
console.log(user.name);
console.log(user.age);
user.age = 50;
console.log(user.age)
console.log(user.name+' ' +user.age)

    //2. Using bracket notation
user['name'] = "Reddy";
console.log(user.name);


//Arrays: List of Objects

let language = ['Java', 'JS'];

console.log(language)
console.log(language.length)

language[2] = 'python'

console.log(language)
console.log(language.length)
console.log(language[2]);


//Functions

function getName(){ //Zero param function
    console.log('Hell!! getName function')
}

//call the function
getName();

//Parameter base function
function greet(name, age){

    console.log('Hello '+ name+' and age '+age);
}

greet('Babu', 30)

greet('Reddy')
greet()

//Returns of function
function add(num1, num2){
    return num1+num2;
}

let sum = add(2,2);

console.log(sum);

console.log(add(50,50));

function squareRoot(number){

    let root = number * number;
    return root;
}

console.log(squareRoot(111));
