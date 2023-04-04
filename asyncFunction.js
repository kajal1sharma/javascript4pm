let promisevar=new Promise((resolve , reject)=>{
         let a=91;
    setTimeout(()=>{
          if(a===90){
            resolve({data:90})
          } 
          else{
            reject({err:"error"})
          } 
    },5000)
})

promisevar.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
});


// function sum(){
//     let arr=[1,2,3,4,5];
//     let sumnum=0;
//     for(let i=0;i<arr.length;i++){
//        setTimeout(() => {
//         sumnum=sumnum+arr[i];
//         return sumnum;
//        }, 5000);
        
//     }
//     // return sumnum;
// }

// let num =sum();
// console.log(num);




// function print(){

//     return [{name:"priya",age:12},{name:"tina", age:45}];
// }

// let str= print();
// console.log(str);
// function asyncExample2(){
// var arr=[1,2,3,4,5]
//     for(let i=0;i<5;i++){
//         setTimeout(()=>{
            
//             console.log(arr[i])
//         },5000)
//     }
  
// }

// asyncExample2()
// function aasyncExample(){

//     console.log("hello iam normal line");
    
//     setTimeout(function(){
//             console.log("hello iam a line in async callback")
//         }
//     ,5000)

//     console.log("hello iam a normal line again");
// }


// aasyncExample();