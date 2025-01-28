// DOM -> Document Object Model

// getElementById
// getElementsByclassName
// getAttribute
// setAttribute
// innerHTML
// textContent
// innerText
// .style
// Array.from()   HTMLcollection
// variable[]  nodelist

let var1 = document.getElementById('title')
var1.innerHTML='hello g kese ho'
var1.style.backgroundColor='green'
var1.style.padding='10px'

let var2 = document.querySelector('ul')
var2.style.backgroundColor='yellow'

let var3 = document.querySelectorAll('li')
var3[2].style.backgroundColor='blue'

let var4 = document.getElementsByClassName('hlo')
Array.from(var4)



let another = Array.from(var4)
another.forEach((items) =>{
       (items.style.color='orange',items.style.backgroundColor='green')
})

//let another = var4.forEach((items) => {
      // return (items[2].style.backgroundColor='green')
//})
console.log(another)



let naan = 'nitesh'

function naam(){
       console.log(naan)
}

naam()