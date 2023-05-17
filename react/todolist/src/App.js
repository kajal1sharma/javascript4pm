import logo from './logo.svg';
import './App.css';
import InputTodo from "./components/InputTodo"
import { useReducer, useState } from 'react';


 function reducer(currstate , action){//action = object
console.log("entering reducer")
    if(action.type === "save"){
        let obj=  [...currstate,action.obj];
        // console.log(obj);
        return obj;
    }
    return [...currstate]
    

}
const initState =[]

function App() {

     //const[data, setData]=useState(initState);
     const [data,dispatch] =useReducer(reducer, initState )  

     function  clickHandler(nameTask) {
      let action ={
        type:"save",
        obj:{name:nameTask}
      } 
      dispatch(action)
     }
    console.log(data);
  return (
    <div className="App">
      <InputTodo clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
