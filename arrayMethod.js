// const arr=[20,30,40,50,60]
// const a=arr.splice(-3)
// let a=arr.reverse()
// console.log(arr[3]);

//push,unshift ,shift ,pop
// arr.shift()             //remove 0th index element
// console.log(arr);// [30,40,50,60]

// console.log(arr.includes(30))  //check  30 is contained then return true

// const newarr=arr.join()   //add all array to string convert
// console.log(typeof(newarr));         //3020405060

//const newarray=new Array(1,3,4,5,6)

// console.log(newarray.shift());//1  //return first element of the array only
// newarray.shift()   //3,4,5,6

// console.log(newarray); //remove first element of an array and other are print
// console.log(newarray.indexOf(3))  //element not exists but you want to return the index  -1

//slice ,splice
// const arr=[2,4,5,6,7]

// // arr.splice(1,3) //splice remove the element in given range
// console.log(arr.slice(3,4))  //index rang-1  divide arrayelement   and return array
// console.log(arr);//[2,7]

// arr.shift() //1st item remove from array
// console.log(arr)//remove 0th index
// console.log(arr.pop()); //return deleted start first single element only

// let a=arr.pop() //remove last single element from the array
// console.log(arr); //print = 2,4,5,6

//concate  more array
// const arr2=["1","2","3",]

// const arr3=[222,333]
// console.log(arr2.concat(arr,arr3));

//if item/element is not existe an array then they return -1

//HIGHER ORDER METHOD  OF MODERN JAVASCRIPT = map,reduce ,filter
// array.forEach(element => {
//take  3 argument = value ,index ,array
// });

// map =new array create and return new array
//foreach is loop but not create a new array
// const arr=[55,63,77,34,54]
// // console.log(arr);
// const a= arr.map((val,index,arr)=>{
//     console.log("index is :"+ index + " "+ " value is :"+ val,', ',"array is:",arr);

// })

//perform each array element opration but not return new array
// arr.forEach((i)=>{
// console.log(i*i);

// })

//filter method =this is also return array with filter values
///example of filter
// const arr=[55,63,77,34,54]
// //return those element which  is greater than 63
// const newaarray=arr.filter((d)=>d>63)
// console.log(arr,newaarray);



//reduce method = return a single element only

//first + next = result ,result+next = result ,.....

const arr = [3, 4, 5, 6, 7, 8];

const a = ((h1, h2) => {
  return h1 + h2; //3+4=7,7+5=12,12+6=18,18+7=25 ,25+8=33      33 is a final answer
});


const b=arr.reduce(a)
console.log(b);               //o/p : 33
