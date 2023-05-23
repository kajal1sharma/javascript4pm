import React from 'react'

import userContext from './userContext'
import { useContext } from 'react'
const Seventh = () => {

    const user = useContext(userContext);

  return (
    <div style={{border:'5px solid orangered' , fontSize:user.fontSize}}>
      Seventh
    </div>
  )
}

export default Seventh
