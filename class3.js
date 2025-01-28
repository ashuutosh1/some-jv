// Datatype conversion and confusion and operations

 let age = 33;

console.log(typeof age);
console.log(typeof (age));

let score = "44abc"; // now it is string because of the duble quote

console.log(typeof score);

let value_In_Number = Number(score);
console.log(typeof value_In_Number);
console.log(value_In_Number);

let pscore = null; 
console.log(typeof pscore);

let value_In_Numberr = Number(pscore);
console.log(typeof value_In_Numberr);
console.log(value_In_Numberr);




let ppscore = undefined; 

console.log(typeof ppscore);

let value_In_Numberrr = Number(ppscore);
console.log(typeof value_In_Numberrr);
console.log(value_In_Numberrr);



let pppscore = true; 

console.log(typeof pppscore);

let value_In_Numberrrr = Number(pppscore);
console.log(typeof value_In_Numberrrr);
console.log(value_In_Numberrrr);


// "33" => 33  string
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

let cat = "";             // => empty string 
let dog = Boolean(cat);
console.log(dog);

// "" => false
// "nitesh" => true

let someNumber = 44;
let otherNumber= String(someNumber);
console.log(typeof otherNumber);
console.log(otherNumber);


// **********************************operations*******************************************

let value = 5;
let negValue = -(value)
console.log(negValue);

// arithmetic operations  -> +,-,/,%,*,**

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);  // raise to the power 
console.log(2/2);
console.log(2%2);  // modulo gives the remainder


// tricky things

let a = "hello";
let b = " Nitesh";
let c = a+b;     // two string addition
console.log(c);


// rules

console.log("1"+ 2);
console.log(1+"2");
console.log("1" + "2");
console.log(3 + "1" + 2);
console.log("1"+2+2);
console.log(1+"2"+"2");
console.log(1+2+"2");

console.log((3+4) * (5%4));  // always try to use parenthesis and try to make code more organised

console.log( Boolean(true));

console.log(+true);
console.log(-true);
console.log(+"");
console.log("");

let num1, num2 ,num3

num1 = num2 = num3 = 2+2; // wrong way

let gamePointer = 100;
gamePointer++;
console.log(gamePointer);

let gameCointer = 100;
++gameCointer;
console.log(gameCointer);

