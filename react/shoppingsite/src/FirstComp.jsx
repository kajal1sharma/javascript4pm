import React from 'react'
import SecondComp from './SecondComp'
import Thirdcomp from './ThirdComp';
import userContext from './userContext';
import { useContext } from 'react';
const FirstComp = () => {

    const user = useContext(userContext);
  return (
    <div style={{border:'5px solid red', fontSize:user.fontSize}}>
        first
      <SecondComp/>
      <Thirdcomp/>
    </div>
  )
}

export default FirstComp
