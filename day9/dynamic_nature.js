let obj={
    name:"prasad",
    course:"FSD",
    acc_balance:10000,
    get balance(){
        console.log(this.acc_balance)
    },
    set updatebal(val){
        this.acc_balance=val;
    }
}
obj.updatebal=20000
obj.balance;

