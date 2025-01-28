//for loop 
//loop =repeation


// for (let i = 0; i < 3; i++) {
//     console.log("pratap");

// }


//while loop
// let i=0
// while (i<4) {
//     if (i==1) {
//         continue;
//     }

//     console.log(i);
//        i++;
   
// }

// let a=1
// while (a<10) {
//     console.log(a);  //1 to 9
//  a++
 
// }


let arr=[2,4,1,0,22,4]
console.log("before sorting array is : ",arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
         }
        
    }
    
    
}
console.log("after sorting array is : ",arr);


let duplicateelement;
//duplicate value find and return 
for (let i = 0; i < arr.length; i++) {
   for (let j = i+1; j < arr.length; j++) {
    if (arr[i]==arr[j]) {
        duplicateelement = arr[i];   
        // arr.splice(i)
       console.log("index is :",i);
       
    }
   }
    
}
console.log("duplicate element is :",duplicateelement);

let uniqueArr=[]
for (let i = 0; i < arr.length; i++) {
 if (!uniqueArr.includes(arr[i])) {
     uniqueArr.push(arr[i])
 }
    
}

console.log("after removing duplicate element  is:",uniqueArr);



// for (let j = 0; j < arr.length; j++) {
//  console.log(arr[j]);
 
    
// }













