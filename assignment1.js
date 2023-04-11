window.addEventListener('load',()=>{
    console.log("window is loaded")
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(data=>{
        return data.json()
    })
    .then(data=>{
        // console.log(data);
        data=[{title:"all new task"},{title:"new task"}];
        let todoDiv = document.getElementById("todoItems")
        data.forEach((element, index) => {

            let div= document.createElement('div')
            div.innerText =element.title;
            
            let buttonnew = document.createElement('button');
            buttonnew.innerText="close";
            buttonnew.className="newbutton"
            
            buttonnew.addEventListener('click',()=>{
                console.log(element,index);
                data.splice(index,1);
                console.log(data);
                todoDiv.removeChild(div);

            })

            div.appendChild(buttonnew);
            todoDiv.appendChild(div)
        });
    })

    let inputfield = document.getElementById("inp")
    // console.log(inputfield,"----");
    let inptval="";
    inputfield.addEventListener('input',(event)=>{
        inptval =event.target.value;
         console.log(inptval)
         
     
    })

    
    let button = document.getElementById('button1');
         button.addEventListener('click',()=>{
        console.log(inptval );
        let todoDiv = document.getElementById("todoItems")
        let div= document.createElement('div')
        div.innerText = inptval;
        todoDiv.appendChild(div)
    })

})