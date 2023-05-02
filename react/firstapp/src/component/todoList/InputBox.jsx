import React, { useState } from 'react'
import Header from './Header'
const InputBox = () => {
  const [task , setTask] = useState(["lets go for walk","wake up at 6","eat lunch"]);
  let taskname ="";
  return (
    <div style={{padding:'auto'}}>
      <input style={{padding:"20px 30px",marginLeft:"40vw"}} 
              placeholder='enter something here...'
              onChange={function(event) {
                 taskname=event.target.value;
               //  task=event.target.value;
                 
              }}
      />
      <button  onClick={()=>{
          setTask([...task,taskname])
      }}>
        Add TODO Item
      </button>
      {/* <h1>{task[0]}</h1>
      <h1>{task[1]}</h1>
      <h1>{task[2]}</h1> */}

      {
        task.map((ele)=>{
          return <h1>{ele}</h1>
        })
      }

    </div>
  )
}

export default InputBox
