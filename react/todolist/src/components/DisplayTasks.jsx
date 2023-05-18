import React,{useState} from 'react'

const DisplayTasks = ({data, deleteHandler}) => {
  
  return (
    <div>
      {data.map(ele=>{
        return <li>
            {/* {ele.name} */}
            {<InputTask ele={ele.name}/>}
            
            <button onClick={()=>{deleteHandler(ele.id)}}>Delete</button>
        </li>
      })}
    </div>
  )
}

function InputTask({ele}){
  const [edit, setEdit] =useState(false);
  if(edit===true){
    return <div>
      <input value={ele} />
      <button  onClick={()=>{
              setEdit(false);
            }}>Save</button>
    </div>
  }
  else{
    return <div>
      <p>{ele}</p>
      <button  onClick={()=>{
              setEdit(true);
            }}>Edit</button>
    </div>
  }

}

export default DisplayTasks
