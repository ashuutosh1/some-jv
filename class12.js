// Objects in javasscript part 2


// const tinderUser2 = new Object()   // singleton object 

//console.log(tinderUser2)



const tinderUser = {}    // non-singleton object 


tinderUser.id= '123abc'
tinderUser.name='Nitesh'
tinderUser.isLoggedIn= false

console.log(tinderUser)


const regularUser ={
    email:'choudharynitesh692@gmail.com',
    fullname:{
        userfullname:{
            firstname:'nitesh',
            lastname:'choudhary'
        }
    }
} 

console.log(regularUser.fullname.userfullname.firstname)


const obj1 ={1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // {}--> target and other as source

// another method using the spread method

const obj3 = {...obj1, ...obj2}
console.log(obj3)


//array object 
const user = [
    {
        id:1,
        email:'nitu@gmail.com'
    },
    {
        id:2,
        email:'nitesh@gmail.com'
    },
    {
        id:3,
        email:'hitesh@gmail.com'
    },
]


console.log(user[0].email)
console.log(user[1].email)
console.log(user[2].id)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename: "js in hindi",
    coursePrice:999,
    courseTeacher:'hiteshChoudhary'
}

// course.courseTeacher
// object destructure --> structuring it to another way

// varibale type , {key type and name declaration }and from where you need to access

const {courseTeacher: Teacher} = course
console.log(Teacher);

//react concept
const navbar = ({company}) => {

}

navbar(company = 'nitesh')

  
// JSON  in json a key and value are in string format and its object 

{
    'name':'nitesh',
    'coursename': 'js in hindi',
    'price':'free'
}

// API in array format
[
    {}
    {}
    {}
]
