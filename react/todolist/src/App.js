import logo from './logo.svg';
import './App.css';
import InputTodo from "./components/InputTodo"
import { useReducer, useState } from 'react';
import DisplayTasks from './components/DisplayTasks';

function reducer(currstate , action){//action = object
  console.log("entering reducer")
      if(action.type === "save"){
          let obj=  [...currstate,action.obj];
          
          // console.log(obj);
          return obj;
      }
      else if(action.type ==="delete"){
        let id= action.id;

        let arr = currstate.filter((ele)=>{
            if(ele.id===id){
              return false
            }
            return true;
        })
        console.log(arr);
        return arr
      }
      else if(action.type ==="update"){
          let maparr = currstate.map((ele)=>{
            if(ele.id === action.id){
              ele.name=action.name;
            }
            return ele;
          })
          return maparr;
      }
      return [...currstate]
      
  
  }
  const initState =[]
let id=1;

function App() {
 
     //const[data, setData]=useState(initState);
     const [data,dispatch] =useReducer(reducer, initState )  

     function  saveHandler(nameTask) {
      let action ={
        type:"save",
        obj:{name:nameTask, id:id}

      } 
      id=id+1;
      dispatch(action)
     }
   
     function deleteHandler(taskId){
      let action ={
        type:"delete",
        id:taskId
      }
      dispatch(action)
     }

     function updateHandler(text,taskId){
      let action ={
        type:"update",
        id:taskId,
        name:text
      }
      dispatch(action)
     }

    console.log(data);
  return (
    <div className="App">
      <InputTodo saveHandler={saveHandler}/>
      <DisplayTasks data={data} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
    </div>
  );
}

export default App;
