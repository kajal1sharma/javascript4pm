import React,{useState} from 'react'

const DisplayTasks = ({data, deleteHandler,updateHandler}) => {
  
  return (
    <div>
      {data.map(ele=>{
        return <li>
            
            {<InputTask text={ele.name} id={ele.id} updateHandler={updateHandler}/>}
            
            <button onClick={()=>{deleteHandler(ele.id)}}>Delete</button>
        </li>
      })}
    </div>
  )
}

function InputTask({text,updateHandler,id}){
  //let str=text;
  const [str,setStr] =useState(text);
  const [edit, setEdit] =useState(false);
  if(edit===true){
    return <div>
      <input onChange={(event)=>{setStr(event.target.value);console.log(str)}} value={str}  />
      <button  onClick={()=>{
              setEdit(false);
              updateHandler(str,id)
            }}>Save</button>
    </div>
  }
  else{
    return <div>
      <p>{text}</p>
      <button  onClick={()=>{
              setEdit(true);
            }}>Edit</button>
    </div>
  }

}

export default DisplayTasks
