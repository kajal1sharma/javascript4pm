import React from 'react'
import SingleTask from './SingleTask'

const TaskDisplayer = ({data}) => {
  //let arr= [<h1>{"iam elelement 1"}</h1>,<h1>{"iam element 2"}</h1>]
  return (
    <div>
      {/* {arr} */}
      {data.map(ele=>{
        return <SingleTask ele={ele}/>
      })}
      
    </div>
  )
}

export default TaskDisplayer

