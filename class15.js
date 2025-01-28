// scope level and mini hoisting

// nested scopes

function one (){
    const username ='nitesh'

    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website);
    two()
}

one()

if (true){
    const username = 'nitesh'
    if(username === 'nitesh'){
        const website = ' youtube'
        console.log(username + website)
    }
   // console.log(website);
}
// console.log(username)




// ++++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo= function (num){    // variable holding the functions
    return num +2
}

console.log(addTwo(2))