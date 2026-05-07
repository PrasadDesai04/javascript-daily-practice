/*let obj={
    name:"student",
    age:21,
    salary:"1.5L"
}

let copyobj=obj;
copyobj.name="prasad";  //impacted to original object
console.log(obj)
*/


let obj1={
    name:"iphone",
    price:10000,
    intro:function(){
        console.log(`${this.name} = ${this.price} = ${this.detail.model}`);
    },
    detail:{        //Nested object
        model:"14",
        store:"mumbai"
    }
}

//spread operator or destructuring
let copyobj1={...obj1};
copyobj1.name="samsung";
// console.log(obj1)
console.log(copyobj1);
copyobj1.detail.model="15";  //It will impact original object;
obj1.intro();
 

//Object assign => It aslo creates shallow copy
let copyobj2=Object.assign(obj1);
copyobj2.name="micromax";
// console.log(obj1);



//Strigify
let copyobj3=JSON.parse(JSON.stringify(obj1));
copyobj3.name="Nokia";
console.log(obj1);
console.log(copyobj3);
obj1.intro();