// For loop / iteration with break and continue
let array = [1,2,3,4,5,6,7,8,9]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}


for(let i=0; i<=10; i++){
    console.log(i)
}

for(let n=10; n>=0 ; --n){
    console.log(n)
}

// let x = 7
// console.log(--x)


for(let i= 1; i<=10;i++){
    console.log('hello everyone ', i)  // shift+Alt+down key to make copy or clone of code
}
 
for(let k=0 ; k<=10; k++){      // ctrl+D for changing the current variable
    console.log(k)
}

for(let h=0; h<=10; h++){
    let element = h
    if(element == 5){
        console.log('5 is the best number')
    }
    console.log(element)
}


// Nested loops

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value : ${i}`)
    for (let j = 0; j <=10; j++) {
        console.log(`inner loop value : ${j} and value of outer ${i}`)
    }
    
}

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value : ${i}`)
    for (let j = 0; j <=10; j++) {
      console.log(i+ '*' +j + " = " + i*j)
    }
    
}

for(let i=5 ,j=0; j<=10; j++){
 console.log(i + '*' + j+ '=' + i*j)
}


for(let i=5 ,j=0; j<=10; j++){
    console.log(i , '*' , j, '=' , i*j)
   }
   
   // using array with loops

   let myarray = ['flash','shaktiman','superman']

   console.log(myarray.length)
   for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
   }

   // break and continue

//    for (let index = 1; index <= 20; index++) {
//           if(index == 5){
//             console.log('5 detected');
//             break;
//           }
//           console.log(`value of i is : ${index}`)

//    }

   for (let index = 1; index <= 20; index++) {
          if(index == 5){
            console.log('5 detected');
            continue;
          }
          console.log(`value of i is : ${index}`)

   }

for(let i=1; i<=5; i++){
    console.log(`${'*'.repeat(i)}`)
}
for (let i = 1; i <= 5; i++) {
    console.log(`printing pattern ${'*'.repeat(i)}`);
}

for(let i=0; i<=5; i++){
    console.log('6'.repeat(i))
}

