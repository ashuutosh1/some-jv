// Functions and parameter

function myFun(){
    for(let i =0; i<=100; i++){
        console.log('hey sunidhi ' + i)
    }
}
// call back

 myFun() // myFun --> reference ()--> execute
 console.log(typeof myFun)

function addTwoNumbers(num1 , num2){  // parameter under ( )
    console.log(num1 + num2)
}

addTwoNumbers(3,4)         // --> number is given under argument ( ) during function call
addTwoNumbers(3,'a')
console.log(3,null)
console.log(4,undefined)

 const result  = addTwoNumbers(5,7)


 console.log("result: ", result);

function fun(numb1, numb2){
    const result = numb1+numb2
    return result
}

// const result = fun(5,5)
// console.log('result: ' , result)

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage('nitesh'))

function loginUserName(username){
    if(username === undefined){
console.log( 'please enter username')
return
    }
    return `${username}, just logged in`
  
}

// console.log(loginUserName())


// professional way 
// function loginUserName(username = 'you'){
//      if(!username){
//         console.log('please enter the username')
//         return
//      }
//      return `${username}, just  logged in`
// }

// console.log(loginUserName('nitesh'))



// rest operator 

function calculateCartPrice (val1, val2, ...num1){
   return num1
}

console.log(calculateCartPrice(200, 400, 500, 600, 800))

// const user ={
//     username :'nitesh',
//     prices:199
 
// }
// function handleObject(anyObject){
//     return (`this is me ${anyObject.username} and my price is ${anyObject.price}`)
// }
// console.log(handleObject(user))

const user ={
    username :'nitesh',
    prices:199

}
function handleObject(anyObject){
    console.log (`this is me ${anyObject.username} and my price is ${anyObject.price}`)
}
handleObject({
          username:'sam',
          price:399
})

// passing arrays 


// const myNewArray = [200,400,100,600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray))


function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([100, 200, 400, 600]))

 
