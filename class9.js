// date and time in depth   --> date is (object)

let date = new Date();
console.log(date)
console.log(date.toString())        //methods
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// interview question 

console.log(typeof date)

// note --> month starts from 0 in javascript

let myCurrentDate = new Date(2023,11,23,5,3,45)
console.log(myCurrentDate.toLocaleString())


//timestamp

let myTimestamp = Date.now();
console.group(myTimestamp);
console.log(myCurrentDate.getTime());


// interview question

console.log(Math.floor(Date.now()/1000)) // converting it into the seconds

let NewDate = new Date()
console.log(NewDate);

// how to select only  specific thing
console.log(NewDate.getDay())
console.log(NewDate.getSeconds())
console.log(NewDate.getFullYear() + 5)
console.log(NewDate.getMinutes())
console.log(NewDate.getDay())

//


console.log(typeof 44)

console.log('Nitesh')

let arr
