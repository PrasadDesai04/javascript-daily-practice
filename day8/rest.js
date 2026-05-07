function add(a,...b){
    console.log(a);
    console.log(b);
    let sum=0;
    for(let i=0;i<b.length;i++){
        sum+=b[i];
    }
    console.log(a+sum);
}

add(4,5,6,9,10,98);