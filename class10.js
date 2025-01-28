// Array in javascript and its function method
// array is an object
// how to store the data 

const myArr = [1,2,3,4,5,6,7,8]  // we can store different type of datatypes
const myHeroes = ['shaktiman', 'superman']
console.log(myArr[3])

const myArr1 = new Array(1,2,3,4,5)
console.log(myArr1)
console.log(myArr1.length)

// Array function methods


// pushing the new element to the array
myArr1.push(6)
myArr1.push(8)

console.log(myArr1)

myArr1.pop()
console.log(myArr1)


// by unshift method the new element gets assembeled at the starting 
myArr1.unshift(0,5)
console.log(myArr1)

// shift method --> removing the first element

myArr1.shift()
console.log(myArr1)


myArr1.shift()
console.log(myArr1)


// includes method to check if the element is present in array or not

console.log(myArr1.includes(5));

let newArr = [2,4,7,'nitesh',false,null];
console.log(newArr.includes('true'));

//indexmethod

console.log(newArr.indexOf('nitesh'))


// join() method add all the elements of an array into a string

let newArr1 = newArr.join()
console.log(newArr);
console.log(newArr1)


// slice or splice method

// interview questions

let nayaArr = [1,2,4,5,'Aryan',6,3];

console.log(nayaArr.slice(1,5))  // in slice the last range element is not included

console.log(nayaArr.splice(1,5))   // in splice the range portion is not choosen

let ekArr = nayaArr.splice(1,6);
console.log(nayaArr)
// console.log(ekArr)


