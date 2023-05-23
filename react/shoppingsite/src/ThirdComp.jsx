import React from 'react'
import FourthComp from './FourthComp'
import FifthComp from './FifthComp'
import userContext from './userContext'
const ThirdComp = () => {
  return (
<userContext.Provider value={{fontSize:'34px'}}>
    <div style={{border:'5px solid brown'}}>
      third
      <FourthComp/>
      <FifthComp/>
    </div>
    </userContext.Provider>
  )
}

export default ThirdComp
