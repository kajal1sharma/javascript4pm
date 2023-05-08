import React from 'react'
import SingleTask from './SingleTask'

const TaskDisplayer = ({data}) => {
  return (
    <div>
      {data.map(ele=>{
        return <SingleTask ele={ele}/>
      })}
      
    </div>
  )
}

export default TaskDisplayer

