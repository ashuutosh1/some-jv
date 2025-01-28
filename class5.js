//  datatype of javascript summary and interview preparation  

// primitive datatypes 

// 7 types : String,Number,boolean,null,undefined,Symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);


const bigNumber = 378127123712372n  // -> BigInt declare by typing n at last



//  Reference type --> non-primitive datatype

// Array,Objects,functions

const heroes  = ["shaktiman", " nagraj" , "doga"];  // -> array


// object declaration
let myObj = {
    name:"nitesh",  // datatype can be anything 
    age: 12,
}

// function declaration

const myfunction = function(){
  console.log('hello world')
}

console.log(typeof bigNumber);
console.log(typeof myfunction);
console.log(typeof myObj);
console.log(typeof heroes);

let arra = [1,2,3,4,5];
console.log(typeof arra);

console.log(typeof isLoggedIn);


