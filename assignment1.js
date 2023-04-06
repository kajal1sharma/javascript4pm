window.addEventListener('load',()=>{
    console.log("window is loaded")
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(data=>{
        return data.json()
    })
    .then(data=>{
        //console.log(data);
        let todoDiv = document.getElementById("todoItems")
        data.forEach(element => {
            let div= document.createElement('div')
            div.innerText =element.title;
            todoDiv.appendChild(div)
        });
    })

    let inputfield = document.getElementById("inp")
     
    inputfield.addEventListener('change',(event)=>{
         let inptval = event.target.value;
    })



})