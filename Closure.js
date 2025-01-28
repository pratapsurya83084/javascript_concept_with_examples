
// //closure  example
/*closure =Closures are powerful because,
 they allow functions to retain access to variables
  from their lexical scope even after the outer function has 
  returned.*/
  
//ex-1
// var sum=function(){
// // console.log("he;;")
// let a=0

// return function(){
//     a++;
// console.log(a)
// }

// }

// var a=sum()  // sum()  gives one more function i.e anonymous function  
// // ,so we need to store one variable are then again calle this variable 
// a()
// a()
// a()
// a()



//ex-2
// var sum=function(a) {//a=2
//     console.log("the live user :",a) //2
//     var c=4

//     return function (b) {    //anonyumous function
//         return a+b+c         // a=2,b=5,c=4    
//     }
// }

// var aa=sum(2);
// console.log(aa(5)) //aa(5)  means calle anonymous function     
//o/p:11,     a+b+c  =11
//a and c value are not change i.e closure , when function is calle then value is not lost


//example-3
  //inside theone function write one or more anonymous function 
const a = function parent(a) {
    console.log("the recived value is:",a);  //1
    
    return{
        firstFunction :function(a,b) {return a+b },  //a+b=2+3=5
       secondFunction :function(b,c) {return b+c }    //b+c=4+5 =9
    }
}


const f=a(1);

console.log(f.firstFunction(2,3))//5
console.log(f.secondFunction(4,5))//9
// console.log(f.secondFunction(4,5))