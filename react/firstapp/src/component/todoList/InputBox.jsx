import React, { useState } from 'react'
import Header from './Header'
const InputBox = ({clickHandler}) => {

  let task;
 function changeHandler(event){
      console.log(event.target.value);
      task=event.target.value;
  }

  // function clickHandler(){
  //   setData([...data, task]);
  // }
    return (
    <div>
      
      <input  onChange={changeHandler}
      placeholder="type something here"/>
      <button onClick={function(){clickHandler(task)}}>Add</button>  
      
    </div>  
  )
}

export default InputBox
