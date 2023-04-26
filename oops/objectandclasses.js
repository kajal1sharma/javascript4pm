window.addEventListener('load',()=>{
    let productName=""
    let productPrice=""
    let productarr=[];
    class product{
        constructor(pname, pprice){
            this.pname=pname;
            this.pprice=pprice;
        }
    }
    let input1=document.getElementById('input1');
    let input2=document.getElementById('input2');
    let submit =document.getElementById('submit');
    input1.addEventListener('input',(event)=>{
        // console.log(event)
        productName=event.target.value
        console.log(productName);
    })
    input2.addEventListener('input',(event)=>{
        // console.log(event)
        productPrice=event.target.value
        console.log(productPrice);
    })
    submit.addEventListener('click',()=>{
        const pro= new product(productName,productPrice);
        productarr.push(pro);
        console.log(productarr)
    })

})



class BankAccount{
    constructor(accountNumber , name, balance=0){
         this.accountNumber=accountNumber;
         this.name=name;
         this.balance=balance;
    }
    debit(debitAmount){
        //this.balance=this.balance-debitAmount;
        this.balance-=debitAmount;
    }
    credit(creditAmount){
        // this.balance=this.balance/creditAmount;
        // this.balance/=creditAmount;
        this.balance+=creditAmount;
    }
}

class Loan extends BankAccount{
    constructor(accountNumber,loanAmount, firstname){
        super(accountNumber,firstname);
        this.loanAmount=loanAmount;

    }
}

class Insurance extends Loan{
    constructor(accountNumber, loanAmount, insuranceAmount, name){
         super(accountNumber,loanAmount,name);
         this.insuranceAmount=insuranceAmount;
    }
}

let insobj = new Insurance(213123, 4000, 20000,"leena");
console.log(insobj)

// let  l=new Loan(2343423,4500);
// let obj =new BankAccount(3223423,"nita",45000)
// l.debit(2000)
// console.log(l);
//prototype chaining


// class BankAccount{
//     constructor(accountNumber, name, balance){
//         this.accountNumber=accountNumber;
//         this.name=name;
//         this.balance=balance;
      
//     }
//     debit(debitAmount){
//         this.balance=this.balance-debitAmount
//     }
//     credit(creditAmount){
//         this.balance=this.balance+creditAmount
//     }
// }

// let b1= new BankAccount(123231, "rajeev", 12000);
// let b2= new BankAccount(123123,"reena", 60000);

// console.log(b1,b2)


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