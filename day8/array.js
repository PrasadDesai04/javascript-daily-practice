//Array of collection of elements

//create
let arr = ["prasad",60,true,784.89,"system"]

//read
console.log(arr[10]);

//Update
arr[3]="jspmrscoe";
console.log(arr);

//delete
delete arr[2];
console.log(arr);



//METHODS:
// 1. Length of array:
console.log(arr.length)

//2. Joining array elements
let str = arr.join("-");
console.log(str);

//3. Adding elements to array at end
arr.push("Desai");
console.log(arr);

//4. Deleting array elements from end
let deli=arr.pop();
console.log(arr+" and deleted value "+deli);

//5. Shift :  Add element at starting of array
arr.unshift("check");
console.log(arr);


// 6. Used to delete the element from start
let delv=arr.shift();
console.log(arr+" and deleeted vale "+delv);





