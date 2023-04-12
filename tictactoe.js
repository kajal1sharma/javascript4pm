let tictactoearr =['','','','','','','','','']
window.addEventListener('load', (event) => {
    console.log("window is ready to work")
    let start = "x"
    let count=0;
    let newarr = document.getElementsByClassName('subcontainer')
    for (let i = 0; i < 9; i++){
        newarr[i].addEventListener('click', (event) => {
            if(tictactoearr[i]==='x' || tictactoearr[i]==='o'){

            }
            else{
            newarr[i].innerText = start;
            tictactoearr[i]=start;
            count++;
            if(count===5){
                if(winning()){

                }
                else{

                }
            }
            console.log(tictactoearr);
            start = start === 'x' ? 'o':"x" 
            }
        })
    }
  
    
})