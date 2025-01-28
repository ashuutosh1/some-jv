// strings in javascript and its function method
let name = 'nitesh';
console.log(typeof name)
const repoCount = 50;

console.log(name + repoCount + 'value');  // concatenate means adding by +


// way to inject the variable to in the back tick 

console.log(`hello my name is ${name} and my repocount is ${repoCount} `)

const gameName = new  String('nitesh ch')
console.log(gameName[0]);  //keyValue pairs
console.log(gameName.__proto__);

console.log([gameName.toUpperCase()]);
console.log(gameName.toLowerCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(1,4); // in slice we can use the negative value  
console.log(anotherString)

const newString1 = '        nitesh          ';
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.trimEnd());
console.log(newString1.trimStart());




const url = 'https://nitesh.com/nitesh%20choudhary'

console.log(url.replace('%20', '_'));

let name1 = 'nitesh';
console.log(name1.replace('nitesh', 'ankush'));
console.log(name1.replace('n', 'a'));

console.log(name1.includes('nitesh'))
console.log(name1.includes('nites'));
console.log(name1.includes('hites'));


let para = 'my name is nitesh choudhary' ;
let words = para.split(' ');
console.log(words);

let wara = 'my name is nitesh choudhary' ;
let dash = para.split(' ');
console.log(dash);


let cara = 'how are you all';
let char = cara.split('')
console.log(char)

let yara = 'how are you all';
let copy = cara.split()
console.log(copy)