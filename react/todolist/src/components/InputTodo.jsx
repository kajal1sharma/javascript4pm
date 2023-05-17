import React,{useState} from 'react'

const InputTodo = ({saveHandler}) => {

  const [task,setTask] = useState("");

 function changeHandler(event) {
    setTask(event.target.value);
 }
  function click(){
    saveHandler(task);
    setTask("")
  }
 
  return (
    <div>
      <input value={task} type="text" onChange={changeHandler}/>
      <button  onClick={click}>Save</button>
    </div>
  )
}

export default InputTodo
