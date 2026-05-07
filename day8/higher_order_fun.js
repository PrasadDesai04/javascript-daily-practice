//THese functions work on array
let nums=[1,2,3,4,5,6,7,8,9];

//map
nums.map((val,index,nums)=>{
    return nums[index]=val*5;
})

console.log(nums);     

//filter
let res = nums.filter((val,index,arr)=>val%2==0);
console.log(res);

//reduce
let sum=nums.reduce((acc,val)=>acc+val);
console.log(sum);

//some, every, forEach