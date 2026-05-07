//Function Declaration

function add(a,b){
    console.log(a+b);
}

function mul(m,n){
    return m*n;
}
add(4,5);
add(90.9,9);
add("Prasad"," Desai");
let multi=mul(6,8);
console.log(multi);


//Function Expression
const sub = function(a,b){
    return a-b;
}
console.log(sub(1,10));
let subs=sub(1,5);
console.log(subs);



//arrow function
let div=(a,b)=>{
    return a/b;
}

let divs=div(4,2);
console.log(divs);


//default parameter
let fullname = function(fname,lname=" sir"){
    console.log(fname+lname);
}

fullname("Gaurav","  Pandey");



// Template Literals
let intro = (name,course,age)=>{
    // console.log("My name is "+name+", I am doing "+course+"and I am "+age+"years old.");
    console.log(`Hello my name is ${name} , I am doing ${course} and I am ${age} years old.`);
}

intro("Prasad","B.Tech.",22);