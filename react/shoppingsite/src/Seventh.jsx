import React, { useEffect } from 'react'

import userContext from './userContext'
import { useContext } from 'react'
import {useRef} from "react"

const Seventh = () => {

    const user = useContext(userContext);
    const divref = useRef(null);
    useEffect(()=>{
        console.log(divref)
        divref.current.style.backgroundColor ="orange";
    },[])
  return (
    <div ref={divref} style={{border:'5px solid orange' , fontSize:user.fontSize}}>
      Seventh
    </div>
  )
}

export default Seventh
