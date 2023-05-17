import React from 'react'

const DisplayTasks = ({data, deleteHandler}) => {
  return (
    <div>
      {data.map(ele=>{
        return <li>
            {ele.name}
            <button >Edit</button>
            <button onClick={()=>{deleteHandler(ele.id)}}>Delete</button>
        </li>
      })}
    </div>
  )
}

export default DisplayTasks
