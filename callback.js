
let arr= [1,2,3,4,4,5,6]
console.log(typeof arr);

arr.forEach(print)


function ourforEach(printArg){
   for(let i=0;i<arr.length;i++){
       printArg(arr[i]);
   }
}


function print(ele){
    console.log(ele);
}

ourforEach(print);
// print(45);
// //callbacks

// function birthdayWishFunction(birthdayname){
//     console.log(`happy birthday to ${birthdayname}`);
// }

// function printWish(birthdayWish, name){
//     birthdayWish(name);
// }
// printWish(birthdayWishFunction, "nita");

// function doSomething(something,extra){
//     console.log(`the ${something} is of ${extra}
//     continue typing here` );
//     console.log("message is here")
// }
// doSomething("stuff","wood")

// (function(num){
//    console.log(num+"iam immediately invoked and then killed")
// })(78)

//arrow function

// const mixer2 = ()=>{
//     return "juices";
// }
// const mixer = ()=>"juices"

// const glass=mixer();
// console.log(glass)

//callback fucntion

// function printWish( ){
//     console.log("happy birthday");

// }
// // printWish();
// let wish = 90;
// wish =function (){
//     console.log("its sunday today");
//     let  a =90;
//     a=90+a;

// }

// wish();