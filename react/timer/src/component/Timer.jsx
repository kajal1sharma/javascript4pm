import React, { useEffect, useState } from 'react'

const Timer1 = ({data}) => {
    const [timer ,setTimer] =useState(0);
    setTimeout(() => {
        setTimer(timer+1);
    }, 1000);
  return (
    <div>
       This is Timer1 component
      <h1>
        {timer}
        {data}
      </h1>
    </div>
  )
}

const Timer2 = () => {


    return (
      <div>
        <h1>This is Timer2 component</h1> 
        
      </div>
    )
  }

  export {Timer1,Timer2}