

    // <!--Promise task assigned does not execute at the same time -->

    // <!-- 3 stages of the promise
    // pending: initial state, neither fulfilled nor rejected.
    // fulfilled: meaning that  the operation was completed successfully.
    // rejected: meaning that the operation failed. -->

    // promise is an object
    //fetch('https://something.com').then().catch().finally() 

    creation
    const promiseOne = new Promise( function(resolve, reject) {
        // do an asyn task 
        // DB calls, Cryptography, network

        setTimeout(function(){
          console.log('Async task is complete')
          resolve()
        },2000)
    })
    
    // consume
    promiseOne.then(function(){
        console.log('promise consumed');
        
    })


    // 2nd method

    new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('Async task 2')
        resolve()
      },1000)
    }).then(function(){
      console.log('async 2 resolved')
    })


    let promisethree = new Promise (function (resolve, reject){
      setTimeout(function(){
        console.log('async is completed')
        resolve({
          username: 'nitesh',
          surname: 'choudhary'
        })
      },2000)
    })


    promisethree.then( function(user){
         console.log(user)
    })


    let promiseFour = new Promise(function(resolve, reject){
      setTimeout(() => {
        let error = false
        if (!error) {
          resolve({username:'Nitesh',surname:'choudhary'})
        }else{
          reject('Error: something went wrong')
        }
      }, 1000);
    });

    promiseFour.then((user)=>{
         //console.log(user);
         return user.username
    }).then((username)=>{
        console.log(username)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
      console.log('The promise is either resolved or rejeccted')
    })



    let promiseFive = new Promise((resolve, reject)=>{
     setTimeout(()=>{
      let error = false
        if (!error) {
          resolve({username:'Nitin',surname:'Kushwah'})
        }else{
          reject('Error: something went wrong')
        }
      }, 1000);
     })



    //  async/await

    async function consumePromiseFive(){
      try {
        const response = await PromiseFive
      console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    consumePromiseFive()

    