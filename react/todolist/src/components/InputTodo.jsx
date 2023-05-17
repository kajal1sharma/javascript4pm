import React,{useState} from 'react'

const InputTodo = ({clickHandler}) => {

  const [task,setTask] = useState("");

 function changeHandler(event) {
    setTask(event.target.value);
 }

 
  return (
    <div>
      <input value={task} type="text" onChange={changeHandler}/>
      <button  onClick={()=>{clickHandler(task);setTask("")}}>Save</button>
    </div>
  )
}

export default InputTodo
