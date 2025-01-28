// comparison of datatype in js

/*
// comparison operator
console.log(2>1);   // greater than
console.log(2<1);    // smaller than
console.log(2>=1);   // greater than equal to
console.log(2<=1);  // smaller than equal to
console.log(2==1); // equal to
console.log(2===1);
console.log(2==='1');  // strict equality
console.log(2!=1);  // not equals to


console.log('2'>1);
console.log('02'<1);
*/

console.log(null > 0)
console.log(null == 0)  
console.log(null >= 0)

// reason for above is that because equality and comparison treats the null 
// differently as comparison treats the null as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check === 

console.log('2' === 2);
