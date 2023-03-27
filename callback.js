

let arr=[1,2,3,4,4,5];

let newarr= arr.map(callback)


function callback(ele){
    return ele*2;
}
console.log(newarr);

let newarr2 =arr.map(function(ele){
    if(ele%2===0){
        return ele*2;
    }
})
console.log(newarr2)

let newarr3 =arr.map((ele)=>ele*2);
console.log(newarr3);
//let arr= ["nita", "sita", "aman", "ram","nikita","neelam"];

// console.log(arr.at(3));




// arr.push("sanjay");
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.shift();

// console.log(arr);
// arr.unshift('nita');
// console.log(arr);


// function filterOut(ele){
//     if(ele.charAt(0)==='n'|| ele.charAt(0)==='N'){
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// let arrnew=arr.filter(filterOut);
// console.log(arrnew)

// function filter(ele ){
//     if(ele.charAt(0)==='n'|| ele.charAt(0)==='N'){
//         return true;
//     }
//     return false
// } 



// function forEachnew(callback){
//     let newarr=[]
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i])){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }

// let arrnewstr= forEachnew(filter);
// console.log(arrnewstr)


// function callbackFunction(element , index){
//     console.log(element +" "+index);
// }

// function newForEach(fnc){
//     for (let i=0;i<arr.length ;i++){
//         fnc(arr[i], i);
//     }
// }

// newForEach(callbackFunction);


// function fnc(ele, index){
//     console.log(ele+" ");
// }
// arr.forEach(fnc);


// let arr= [1,2,3,4,4,5,6]
// console.log(typeof arr);

// arr.forEach(print)


// function ourforEach(printArg){
//    for(let i=0;i<arr.length;i++){
//        printArg(arr[i]);
//    }
// }


// function print(ele){
//     console.log(ele);
// }

// ourforEach(print);
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