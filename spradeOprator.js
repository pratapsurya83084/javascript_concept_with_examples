//ES-6 OR ADVANCE JS CONCEPT
//rest and sprade oprator
//rest and sprade is mostly used in the array or object

//...........In Rest oprator parameter values are combined in array ..........
//..........In Sprade oprator array  values are divides seprately(breaks)

//other contain another all parameter
// function restoprator(a, b, ...other) {
//   console.log(other);
//   return a + b;
// }

// const a = restoprator(2, 3, 4, 5, 6);
// console.log(a);

// rest oprator example
// function sum(...numbers) {
// console.log(arguments);  //ES-5   format use arguments
// console.log(numbers); //ES-6  format
//   return numbers.reduce((total, num) => total + num, 0);
// }

//  sum(2, 3, 6, 7, 9, 9); //27

// console.log(ss);

//sprade example

// var names=["pratap","raj","vikram","om","vaishnav"]
// // console.log(...names)   // o/p : pratap ,raj,vikram,om,vaishnav

// function namess(a,b,c) {
//     console.log(a,b,c)
// }
// // namess(names[0],names[1],names[2]) //seprately passed all value
// namess(...names)  //using spraade oprator

//how to override or change the value

var students = {
  name: "Pratap",
  age: 21,
  hobbies: ["cricket", "singing"],
};



//obj destructuring 
const {...rest}=students
// console.log(rest);

//change age or override the value
var newStudent={
    ...students,
    age:25
}
console.log(newStudent);

