let arr = [ 12, 4, 7, 2, -101, 13];
//maximum
//way 2
let max= arr[0];

for(let i=1 ;i< arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);


//way 1 
// let max = -9999;
// let i=0;
// for(i=0; i<arr.length ;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);




//minimum
// let min =9999;
// for(let i =0 ;i < arr.length; i++){

//     if(min> arr[i]){
//         min=arr[i]
//     }
//     else{

//     }
// }

// console.log(min);



