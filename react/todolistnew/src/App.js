import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import db from "./firebase/config"
import {collection, addDoc } from 'firebase/firestore/lite';
import {arr} from "./firebase/GetTodo";
 function App() {
 
  const [data, setData] = useState([]);
  let str=""

  useEffect(()=>{
    setData(arr)
  },[])

  function changeHanlder(event)
  {
    str=event.target.value;
    console.log(str);
  }

 function clickHandler(){
    const todoListCol = collection(db, 'todolist');
    addDoc(todoListCol,{name:str,active:true})
    .then(d=>{
      setData([...data,{name:str,active:true}])
    })
    .catch(err=>{
      //console.log(err);
    })
    
  }

  return (
    <div className="App">

      <input onChange={changeHanlder}/>
      <button onClick={clickHandler}>Add</button>

      <div>
      {data.map(ele=>{
               return <li>{ele.name}</li>
              })}
      </div>
       
    </div>
  );
}

export default App;
