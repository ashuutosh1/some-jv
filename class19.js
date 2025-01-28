// control flow statements

// >,< , <=, >=, == , === 

// if (condition){}
const score = 100

if (score>=75){
    console.log('you are eligible')
}else {
    console.log('you are not eligible')
}

if (7>=7){
    console.log(true)
}else{
    console.log(false)
}
 
if ('ni'.length == 'vikas'.length){
    console.log(true) 
}else{
    console.log(false)
}

const scoree = 200
if(scoree > 100){
    const power = 'fly'
    console.log(`user power: ${power} `);
}else{
    console.log('not executed')
}

// console.log(`user power : ${power}`);

// implicit scope   man liya he mene ki scope he
const balance =1000
// if(balance >500) console.log('test')
if (balance < 500){
    console.log('less than 500')
}else if (balance < 750){
    console.log('less than 750')
}else{
    console.log('less than 1200')
}

// reallife use 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2==3){           // and statement
    console.log('allow to buy courses')
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser ){   // OR stmt
    console.log('user logged in')
}


// Nullish coalescing Operator (??): null undefined <--made for this both jhndu

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)


// ternay operator
//condition ? true : false

let age = 20

age <= 17 ? console.log('you can vote'): console.log('you cannot vote')

// switch stmt

// switch(key){
//     case value:

//     break;
//     default:
//         break;
// }



const month = 'March'

switch (month){
    case 'jan':
        console.log('january')             // to make duplicasy press shift+Alt+downarrow
    break;
    case 'feb':
        console.log('feburary')      
    break;
    case 'March':
        console.log('March')     // by default if one key get matched then all down case gets executed that's why we use break  except default
    break;
    case 'april':
        console.log('April')
    break;
    default: 
        console.log('default case match')
    break;
}



const car = 'mercedez'

switch (car){
    case 'audi':
        console.log('audi')             // to make duplicasy press shift+Alt+downarrow
    break;
    case 'jaguar':
        console.log('jaguar')      
    break;
    case 'bmw':
        console.log('BMW')     // by default if one key get matched then all down case gets executed that's why we use break  except default
    break;
    case 'mercedez':
        console.log('Mercedez')
    break;
    default: 
        console.log('default case match')
    break;
}


const userEmail = 'nitesh222@gmail.com'

if(userEmail){
    console.log('Got user Email')
}else{
    console.log("dont't have user Email")
}

const userEmail1 = ''     // because of mpty string

if(userEmail1){
    console.log('Got user Email')
}else{
    console.log("dont't have user Email")
}

const userEmail2 = []     // spcl condn

if(userEmail2){
    console.log('Got user Email')
}else{
    console.log("dont't have user Email")
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined,NaN

// truthy values

// "0", 'false' , " " , [], {} , (function(){} --> empty function)

// way to check array

if(userEmail2.length === 0){
    console.log('array is empty')
}

// way to check object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log('object is empty')
}


// false == 0
// true
// false == ''
// true
// 0 == ''
// true