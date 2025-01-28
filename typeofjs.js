//primitive and reference 
//primitives = number ,boolean ,bigint,string,null,undefined

//refrence = [] () {}

//copy the value but not real copy  , but refrence value is passed 
// , and copy value copied then this value are primitive type.

// var a=12
// var b=a //b=10
// b=b+2 //10+2=12
// console.log(a,b);

var arr=[12,13,14,15]
var b=arr;  //b=[12,13] 


b.pop() //[13]
console.log(arr,b);  //arr=[12,13,14] , b==[12,13,14]


