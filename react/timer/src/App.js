import logo from './logo.svg';
import './App.css';
import {Timer1 } from "./component/Timer"
import A from "./component/A";
import B from "./component/B"
import { useState } from 'react';
function App() {

  const [data, setData] =useState("hello world");
  

  function clickHandler(){
    // str=str+'a';
    // console.log(str);
    let  str=data+"a";
    setData(str);
  }

  return (
    <div style={{height:"90vh", width:"90vw",border:"5px solid black"}}>
     <h1> {data}</h1>
      <button onClick={clickHandler}> Click </button>


     {/* <A title="Iam A Component"  title2="numberr of rops can be passed"/>
     <B  arr={[1,2,3,4,5]}/>
     */}
    </div>
  );
}

export default App;
