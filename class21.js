// while loop and Do-while loop


// while(condition){
//}

//let i = 0
// while(i<=10){
//   console.log(`hello nitesh, ${i}`)
//    i++;
// }


let k = 0
while(k<=10){
  console.log(`hello nitesh, ${k}`)
   k = k+3;            //increment by 3 times
}

// let myarray = ['Bheem', 'Arjun', 'Nakul', 'Udhester']
// console.log(myarray.length)
// let n=0;
//  while(n<=myarray.length){
//     console.log(`name of pandva:  ${myarray}`)
//     n = n+1;
// }

let myarray = ['Bheem', 'Arjun', 'Nakul', 'Udhester']
console.log(myarray.length)
let n=0;
 while(n<myarray.length){
    console.log(`name of pandva:  ${myarray[n]}`)
    n = n+1;
}


let i = 0 
do{
    console.log(`score is ${i}`)
    i++;
}while(i<=10)



    let g = 11
do{
    console.log(`score gs ${g}`)
    i++;
}while(i<=10)   // condition is checked at last due to which we are able to print 11