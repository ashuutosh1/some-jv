// high order array loops
// for of loop
// for-in loop
// ['' '' '']
// [{}{}{}]

// for-of on Array
const array = [1,2,3,4,5]

for (const i of array) {
    console.log(i);
}

let str = 'nitesh';
for (const char of str) {
    console.log(char)
}
// for-of on object
let obj={
    username:'nitesh',
    uid:'22BCT10006'
}

for (const element of Object.entries(obj)) {
    console.log(element)
}
// function
function naam(){
    console.log('nitesh')
}

naam()

// Maps   // it is used to store the unnique values and no repeat value will be printed again

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

console.log(map)

for (const element of map) {
    console.log(element);
    
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

let cap = new Map()
cap.set('IN', 'india')

for(let i of cap){
    console.log(i)
}





// for-in loop
let objct={
    username:'nitesh',
    uid:'22BCT10006'
}

for  (const key in objct){
    console.log(key)
}
for (const key in objct) {
    console.log(`${key} shortcut is for ${objct[key]}`)
}

let arr = ['Nitesh', 'Varun', 'Keshav', 'itender', 'kartik']

for (const key in arr) {
      console.log(`${key} and its value is ${arr[key]}`)    
}

// const mapp = new Map()
//  mapp.set('IN', 'India')
// mapp.set('USA', 'United States of America')
// mapp.set('Fr', 'France')

// for (const key in mapp) {
//   console.log(`${key} in ${mapp[key]}`)
// }     we cannot iterate through map like this





// for-Each loop  using call back function

// on array

const ar = ['Varun', 'Nitesh', 'vishal', 'tejas']

ar.forEach( function(para){    // we dont't give function name in call back function
    //console.log(para)
})
// using arrow function
const arrr = ['Varun', 'Nitesh', 'vishal', 'tejas']

arrr.forEach( (para) =>{    // we dont't give function name in call back function
    //console.log(para)
})

function printMe(para){
      console.log(para)
}

// arr.forEach(printMe)

ar.forEach((val, index, arr)=>{
    console.log(val,index,arr)
})

let mycoding = [
    {
        username:'nitesh',
        uid:'22BCT1006'
    },
    {
        username:'Ashutosh',
        uid:'22BCT10009'
    },
    {
        username:'Aakash',
        uid:'22BCT10004'
    }
]


mycoding.forEach((val)=>{
    console.log(val.username)
})

mycoding.forEach((val,index)=>{
    console.log(val,index)
})