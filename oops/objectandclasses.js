

class BankAccount{
    constructor(accountNumber, name, balance){
        this.accountNumber=accountNumber;
        this.name=name;
        this.balance=balance;
      
    }
    debit=function(debitAmount){
        this.balance=this.balance-debitAmount
    }
}

let b1= new BankAccount(123231, "rajeev", 12000);
let b2= new BankAccount(123123,"reena", 60000);

console.log(b1,b2)


// function BankAccount(accountNumber, name, balance){
//     this.accountNumber=accountNumber;
//     this.name=name;
//     this.balance=balance;
// }



// let object1 = new BankAccount(123421,"raju",12000);
// let object2 =new BankAccount(1232412,"neena",12300);
// let object3=new BankAccount(234343,"leena",70000);

// BankAccount.prototype.debit=function(debitAmount){
//     this.balance=this.balance-debitAmount
// }
// BankAccount.prototype.credit=function(creditAmount){
//     this.balance=this.balance+creditAmount;
// }

// object1.credit(4000);
// object2.debit(2000);
// object3.debit(4000);
// console.log(object1);
// console.log(object2);

// console.log([1,2,3,4])


// object1.debit(2000);
// console.log(object1)
// object1.credit(2000);
// console.log(object1)




// let person1 = {
//     accountNumber:12345,
//     name:"raju",
//     balance:12000,
//     debit:function(debitAmount){
//        // console.log("balance from debit fucntion "+this.balance);
//         console.log(this);
//         this.balance=this.balance-debitAmount;
//     },
//     credit:function(creditAmount){
//        // console.log("balance from credit fucntion "+this.balance);
//        console.log(this);
//         this.balance=this.balance+creditAmount;
//     }
// }

// let person2={
//     accountNumber:12345,
//     name:"raju",
//     balance:12000,
//     debit:function(debitAmount){
//        // console.log("balance from debit fucntion "+this.balance);
//         console.log(this);
//         this.balance=this.balance-debitAmount;
//     },
//     credit:function(creditAmount){
//        // console.log("balance from credit fucntion "+this.balance);
//        console.log(this);
//         this.balance=this.balance+creditAmount;
//     }
// }
// person1.credit(4000);
// person1.debit(4000);
// console.log(person1);