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

















