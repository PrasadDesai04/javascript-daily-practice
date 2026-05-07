let student={
    name:"prasad",
    course:"FSD",
    status:"pass",
    fees:"300000"
}

//for in loop is used to iterate iver objects
for(let key in student){
    console.log(key +"="+student[key]);
}
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))