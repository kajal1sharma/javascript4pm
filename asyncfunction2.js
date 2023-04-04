async function doSomething(){
    function doSomeAsyn(){
    let promiseVar = new Promise(function callback(resolve, reject){
        setTimeout(function operation(){
            let a =190;
            let b=100;
            if(a>b){
             //resolve("a is greater !! task successful");
             let promise =new Promise(function callback(resolve2, reject2){
                let c=900;
                let d=200;
                setTimeout(()=>{
                        if(c>d){
                            resolve2("right result")
                        }
                        else{
                            reject2("wrong result")
                        }
             },6000)
             })

             resolve(promise);

            }
            else{
             reject( "b is greater !! task unsuccessful");
            }
        }, 4000);
    });
 return promiseVar;  
}

let promise = await doSomeAsyn();

promise.then(function callback(promiseresult){
    // console.log(data);
    return promiseresult;
})
.then(function callback(data){
    console.log(data);
})
.catch(function callback(err){
    console.log(err);
})

console.log("iam a synchronous line")

}

doSomething()

// function apiRequest(){

  
//     fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then((response) =>{let res= response.json()
//                          console.log("iam line 1: ", res);
//                          return res;   
//                         })
//     .then((jsonData) =>{ console.log(jsonData)})
//     .catch(()=>{

//     }) 

// }
// apiRequest()

// function doSomethingEvenMore(){
//     console.log("line 6");
//     setTimeout(()=>{
//         console.log("async 2");

//     },1000)
//     console.log("line 7")
// }

// function doSomethingmore(){
//     console.log("line 4");
//     doSomethingEvenMore()
//     console.log("line 5");
// }
// function doSomething(){
//     console.log("line 1");
//     console.log("line2");
//     setTimeout(function(){
//         console.log("iam async ");
//     },5000)
//     console.log("line 3");
//     doSomethingmore();
// }
// doSomething()