// Filter, Map and Reduce

// foreach loop doesnot return the value at all

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let fil = arr.filter((items) => items > 4 )  // need to store in another variable

// console.log(fil)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let fil = arr.filter((items) => {
//     return items >= 4
// })  // need to store in another variable

// console.log(fil)



// using for Each loop
let arr = [1,2,3,4,5,6,7,8,9,10]
let newNums = []
arr.forEach( (items) => {
    if(items > 5){
        newNums.push(items)
    }
})

console.log(newNums)

const books = [
    {
        title:'Bookone',
        genre:'Fiction',
        Publish:2003,
        edition:2004
    },
    {
        title:'BookTwo',
        genre:'History',
        Publish:2001,
        edition:2002
    },
    {
        title:'BookThree',
        genre:'Science',
        Publish:1993,
        edition:1996
    },
    {
        title:'BookFour',
        genre:'Non-Fiction',
        Publish:1995,
        edition:1998
    },
    {
        title:'BookFive',
        genre:'Social-Science',
        Publish:1992,
        edition:1994
    },
    {
        title:'BookSix',
        genre:'Science',
        Publish:2000,
        edition:2001
    }
]

let userBooks = books.filter((items)=> {
    return  (items.genre === 'Science' && items.Publish >= 1995)
})

console.log(userBooks);


// map function method

const list = [1,2,3,4,5,6,7,8,9,10]

//let newList = list.map((num) => {
  //  return (num+10)
// })

let newList = list         // chaining method
.map((num) => num*10)
.map((num) => num + 1)
.filter( (num) => {
    return (num >= 40)
})
console.log(newList)



// Reduce method  interesting functionality

const myNNums = [1,2,3,4,5]

let myTotal = myNNums.reduce( (acc , currval) => {
    console.log(`acc:${acc} and currval:${currval}`)
    return acc + currval
}, 0)

console.log(myTotal)

const shoppingCart=[
    {
        courseName:'js course',
        Price:1999
    },
    {
        courseName:'py course',
        Price:1499
    },
    {
        courseName:'java course',
        Price:2499
    },
    {
        courseName:'backend course',
        Price:3999
    }
]

// using reduce method over it

let totalAmount = shoppingCart.reduce( (acc, items) => {
    return (acc + items.Price)
}, 0)

console.log(totalAmount)