async function print(){

  let response= await  fetch("https://jsonplaceholder.typicode.com/todos/");
   let data =await response.json();
   console.log(data); 
   console.log("iam working sync")
} 
print()