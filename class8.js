// number and maths in javascript 

const score = 500
console.log(score)
console.log(score.length)
console.log(typeof score)  // typeof method

const balance = new Number(400)
console.log(balance)

console.log(typeof balance)


//toString()
console.log(balance.toString())

console.log(typeof balance.toString())
console.log(typeof balance)
// length
console.log(balance.toString().length);

// toFixed(number)
console.log(balance.toFixed(2));
console.log(balance.toFixed(4));

// toprecision_method()

let otherNumber = 4125.38393;
console.log(otherNumber.toPrecision(5));

//toLocaleString
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));

Number.MAX_VALUE --> 1.79
Number.MIN_VALUE 
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER


// ++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

//Math is a  library of javascript powerfull library

console.log(Math);

//absolute method
console.log(Math.abs(-5))  // convert - to +

// Roundoff method
console.log(Math.round(6.8))

// ceil--> top number always 
console.log(Math.ceil(7.1))

// floor--> bottom number always 
console.log(Math.floor(7.8))

// squareroot
console.log(Math.sqrt(5))

// power
console.log(Math.pow(5))

// minimum value
console.log(Math.min(3,5,8,-2,9,0,-1,-3))

//maximum value
console.log(Math.max(20,30,6,91,40,-10,))

//Random --> mostly used  value will be generated between 0 and 1
console.log(Math.random())
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)



