import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import RightPanel from './RightPanel'
import Status from "./Status";

const Home = () => {
  return (
    <div>
      <Status/>
      <Sidebar/>
      <Main/>
      <RightPanel/>
      
    </div>
  )
}

export default Home
