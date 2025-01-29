//promise contained 3 stats-pending ,fullfill,reject
/*promise = 
In JavaScript, a Promise is an object that represents the 
eventual completion (or failure) of an asynchronous
 operation and its resulting value. Promises are used
  to handle asynchronous operations more cleanly and avoid
   callback hell.
*/

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a result (resolved value).
// Rejected: The operation failed, and the promise has a reason for the failure (error).
//finally always run

// const promises = new Promise((resolve, reject) => {
//    //do async task
   
//    setTimeout(function(){
// console.log("hey i am here....")
// resolve()
//    },2000)

// })

// //we  need to connect promise so above timeout call resolve
// promises.then(function(){
//     console.log("promise consumed...");
    
// })
  



new Promise(function(resolve ,reject){
setTimeout(()=>{
    console.log("asynchronously run block...")
    resolve({name:"praatap"}) // if resove()  called then  below part are connect to promisw .then
},1000)
}).then(function(a){
    setTimeout(()=>{
        console.log(a)
        console.log("promise are cosumed then block executed......");
    },2000)
})



