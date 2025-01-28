// arrow function this and arrow functions

// ES6 came in 2015

const user ={
    username :'nitesh',
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome  to this website`)  // this keyword basically refer to your current context like if we want to refer to the variables
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

//onsole.log(this)

// in browser the global object is the window object
// this give the empty object 


// this works on object but this doesn't work with functions like this way
// function chai (){
//     console.log(this)
// }

// chai()

// const chaii = function(){
//   let usernamee = 'nitesh'
//   console.log(this.usernamee)
// }

// chaii()


const chaii = () => {
    let usernamee = 'nitesh'
    console.log(this)
  }
  
  chaii()

  // arrow function
  // () => {}

    // const addTwo = (num1 , num2) => {
    //     return num1+num2
    // }

    // console.log(addTwo(3,6))





    // implicit return  need not to use return keyword and curly braces {}

    // const addTwo = (num1 , num2) => (num1+num2)

    //with object declaration
    const addTwo = (num1 , num2) => ({username:'nitesh'})

    console.log(addTwo(3,6))

    // const myArr = [2,5,7,9,12]
     
    // myArr.forEach(() => {})



    