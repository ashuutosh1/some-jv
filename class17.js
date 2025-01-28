// IIFE immediately invoked funnction Expression (IIFE)

// function chai(){
// named IIFE 
//     console.log('db connects')
// }
// chai()

// ()()  // first () where we will define the data function and the another one is () is about the execution

(function guitar(){
    console.log('i love guitar')
})();
// ; to stop the context 
// this method is done we need to prevent the global scope pollution like variables  that is why we have used iife

( (name) => {
    console.log(`i love gym ${name}`)
})('nitesh')