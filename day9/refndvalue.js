let fridge={
    coldrink:"1L",
    snacks:"chips"
}
//reference type
//shallow copy

let refridgerator=fridge;
refridgerator.coldrink="0.5L";
console.log(fridge)

//deep copy: new memory block
//value typr: primitive
let money=1000;
let copymoney=money;