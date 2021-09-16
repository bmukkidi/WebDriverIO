//Arithematic Oerators
// Assignment 
//Ternary
//Comparision
//Logical 


//Arithematic Oerators

let x=10;
let y = 30;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x **y) //10power30

//++ and --
let p = 10;
let q = p++;

console.log(p++)
console.log(++q)


let p1 = 10;
let q1 = p1--;

console.log(p++)
console.log(++q)

//Assignment Operator
let x1=5;
let c = x1+5;

console.log(c)

let j=5;
j*=5;
console.log(j)

//Comparision 

let a = 1
console.log(a>=1)

console.log(a===1) //Strict equality type and value
console.log(a==1) // loose equality - only value
console.log('1'==1)
console.log(true===1)


//Ternary Operators

let points = 100;
let type = points > 100 ? 'Gold' : 'Silver'
console.log(type)

//Logical Operators
//1. And or && - both conditions should satisfy | || - one condition should satisfy

let highIncome = false;
let goodCreditScore = true;
let eligibel = highIncome && goodCreditScore;
console.log(eligibel)


//NOt (!)

let isActiver = false

console.log(! isActiver)

console.log(!(10>5))

//Logical Operators - Opeartions with non boolean
//falsy value


let myColor = 'White';
let default1 = 'black';

console.log(myColor || default1)



let myColo;
let default2 = 'black';

console.log(myColor || default2)
