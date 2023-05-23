import React, { useRef, useState } from 'react'

const SecondComp = () => {
    const [rerender , setRerender] =useState(0);
   const user= useRef({name:"rita", surname:"verma"});
//    useState(90);
//    let a=0;
  return (
    <div style={{border:'5px solid yellow'}}>
      Second Component
      <button onClick={()=>{setRerender(0);console.log("rerendering",user.current.name)}}>Rerender</button>
      <input placeholder="name" onChange={(event)=>{user.current.name=event.target.value}}/>
      {/* {a=90} */}
    </div>
  )
}

export default SecondComp
