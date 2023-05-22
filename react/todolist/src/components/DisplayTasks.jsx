import React,{useContext, useState} from 'react'
import InputTask from "./InputTask";
import ThemeContext from '../context/Theme';

const DisplayTasks = ({data, deleteHandler,updateHandler}) => {
  
 const theme =useContext(ThemeContext);

  return (
    <div>
      {data.map(ele=>{
        return <li style={{backgroundColor:theme.backgroundColor, color:theme.color}}>
            
            {<InputTask  text={ele.name} id={ele.id} updateHandler={updateHandler}/>}
            
            <button style={{backgroundColor:theme.deletebuttoncolor}} onClick={()=>{deleteHandler(ele.id)}}>Delete</button>
        </li>
      })}
    </div>
  )
}


export default DisplayTasks
