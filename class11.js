// object in depth in javascript pt->1

let myObj = {
    name:"nitesh",
    age:21,
    rollno:'22BCT10006',
    class:'22BCB-1'
}

console.log(myObj)

console.log(typeof myObj)

// singleton made by constructor


// Object Literals

Object.create  // way to constructor singleton  object declaration


// way to use symbol in object


const my_key = Symbol('key');

const Jsuser={
    name:'nitesh',       // we can define key here
    email:'choudharynitesh692@gmail.com',
    [my_key]: 'mykey1',
    isLoggedIn: false,  
}

console.log(Jsuser[my_key])

// method to access the information of the object

console.log(Jsuser.name);

// best way to access
// this method is useful when we need to access the string type information 

let tObj = {
    name:'nitesh',
    'last_name': 'choudhary',
    age:22
}

console.log(tObj);

console.log(tObj['last_name'])  //using the square bracket notation

// way to change the information in objects for example

console.log(tObj.name='my name is nitesh')
console.log(tObj)

// if you dont want to change the value and want it permanently then use freeze

Object.freeze(tObj)

tObj.age=33;

console.log(tObj.age)


// function type 1 citizen treat like variable

let teraObj = {
    name:'nitesh',
    'last_name': 'choudhary',
    age:22
}


teraObj.greeting = function(){
    console.log('hlo user')
}

teraObj.greetingtwo = function(){
    console.log(`hlo user, ${this.name}`)
}


console.log(teraObj.greeting());
console.log(teraObj.greetingtwo());



console.log(teraObj.greeting)