let inptval={value:"",type:0, index:0};
data=[{title:"all new task"},{title:"new task"}];
window.addEventListener('load',()=>{
    console.log("window is loaded")
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(data1=>{
        return data1.json()
    })
    .then(data1=>{
        // console.log(data);
        
        let todoDiv = document.getElementById("todoItems")
        data.forEach((element, index) => {

            let div= document.createElement('div')
            div.className="divitem"
            div.innerText =element.title;
            
            let buttonnew = document.createElement('button');
            let buttonedit =document.createElement('button');
            buttonnew.innerText="close";
            buttonedit.innerText="edit";
            buttonnew.className="newbutton";
            buttonedit.className="newbutton";
            div.appendChild(buttonnew);
            div.appendChild(buttonedit);
            todoDiv.appendChild(div)
            buttonedit.addEventListener('click',()=>{
                let inputfield = document.getElementById("inp");
                inputfield.value=element.title;
                inptval.type=1;
                inptval.index=index;
                console.log(inptval,"======")
                inputfield.autofocus;
                
            })
            buttonnew.addEventListener('click',()=>{
                console.log(element,index);
                data.splice(index,1);
                console.log(data);
                todoDiv.removeChild(div);


            })

            
        });
    })

    let inputfield = document.getElementById("inp")
    // console.log(inputfield,"----");
    
    inputfield.addEventListener('input',(event)=>{
         inptval.value =event.target.value;
                
         console.log(inptval)
         
     
    })

    
    let button = document.getElementById('button1');
         button.addEventListener('click',(event)=>{
            console.log(event);
        console.log(inptval );
        let todoDiv = document.getElementById("todoItems")
        let divitem= document.createElement('div')
        divitem.className="divitem";
        console.log(inptval)
                if(inptval.type===0)
        {
            div.innerText = inptval.value;
            todoDiv.appendChild(divitem)
        }
        else if(inptval.type===1){
            data[inptval.index]=inptval.value;
            let listarr =todoDiv.getElementsByClassName('divitem')
            console.log(listarr)
            listarr[inptval.index].innerText=inptval.value;
        }
    })

})