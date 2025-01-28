// stack and memory heap 

// stack --> primitive type used
// heap --> non-primitive 

let myvalue = "5star"
let yourvalue = myvalue;


yourvalue = 'sunidhi';
console.log(yourvalue);

console.log(myvalue);


// heap memory

let myObj={
    name:"nitesh",
    upi:"123@Gpay"
}

let yourObj = myObj;
yourObj.name = 'chaman';

console.log(yourObj);
console.log(myObj);
