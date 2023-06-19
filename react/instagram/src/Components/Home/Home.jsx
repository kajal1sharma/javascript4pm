import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import RightPanel from './RightPanel'
import Status from "./Status";

const Home = () => {
  return (
    <div>
      <Sidebar/>
      <Main/>
      <RightPanel/>
      <Status/>
    </div>
  )
}

export default Home
