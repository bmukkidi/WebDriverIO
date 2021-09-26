//if else
//switch cases

// 6 to 12  --- Goodd Mornign
//12 -18 --- Good evening
//After 18 ---Good nignt

let time = 8;

if(time>=6 && time<12) {
    console.log('Good Moring');
    console.log('GM')
}    
else if(time>=12 && time<18)     
    console.log('Good Afternoon');
else
     console.log('Good Night');

//WAP to find the max number

let a  = 500;
let b = 400;
let c =300;

if(a>b && a>c) console.log('A is greatest');
else if(b>c) console.log('B is greatest...')
else console.log('C is greatest');

//switch case
console.log('=========Switch Cases================')
let role = 'Babu'
switch(role){
    case 'Guest':
        console.log('Guest user');
    break;
    case 'Admin':
        console.log('Admin User');
    break;
    case 'Vendor':
        console.log('Vendor User');
    break;
    default:
        console.log('Default user');
    break;
}

if(role==='Admin') console.log('Admin USer')
else if(role === 'Vendor') console.log('Vendor user');
else if(role === 'guest') console.log('Guest User');
else console.log('Default user');
