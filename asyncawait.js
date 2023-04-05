
// async function makeSynch(){
//   let pro= await new Promise((resolve , reject)=>{
//     setTimeout(() => {
//       resolve("iam line 1");
//     }, 2000);
//   })

//   console.log(pro)
//   console.log("iam line 2")
// }

// makeSynch()

// let timerid = setInterval(()=>{
// console.log("hello")
// },2000)

// setTimeout(()=>{
//   clearInterval(timerid);
// },30000)

// async function print(){
//   return new Promise((resolve,reject)=>{
//       let a=90;
//       let b=100;
//       if(a<b){
//         resolve("a is smaller")
//       }
//       else{
//         resolve("b is smaller")
//       }

//       reject("error in code");
//   })
// }

// let promise = print();
// promise .then(data=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err)
// })

// async function print(){

//   return 12;
// }

// let answer = print();
// answer.then((data)=>{
//   console.log(data)
// })
// .catch(err=>{
//   console.log(err)
// })
// console.log(answer)

// let promise = new Promise((resolve, reject)=>{

//   setTimeout(()=>{
//    if(false)
//     resolve("promise is resolved")
//     else{
//       reject("promise is rejected")
//     }
//   }, 3000)

// })


// promise.then(data=>{
//   return data;
// })
// .then(data=>{
//   console.log(data);
// })
// .catch(err=>{
//   console.log(err);
// })
// .then(()=>{
//    console.log("iam the last then block")
//})

// async function print(){

//   let response= await  fetch("https://jsonplaceholder.typicode.com/todos/");
//    let data =await response.json();
//    console.log(data); 
//    console.log("iam working sync")
// } 
// print()