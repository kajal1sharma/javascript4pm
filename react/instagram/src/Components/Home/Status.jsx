import React from 'react'

let data=[{statusImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJW5CHlRgNL4RmKo7Oll-atYWmVxFTAyrZk0NcAYtJw&s",photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s"},
{statusImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJW5CHlRgNL4RmKo7Oll-atYWmVxFTAyrZk0NcAYtJw&s",photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s"},
{statusImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJW5CHlRgNL4RmKo7Oll-atYWmVxFTAyrZk0NcAYtJw&s",photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s"},]

const Status = () => {
  return (
    <div style ={{display:"flex",gap:'20px'}}>
        {data.map((ele)=>{
            return <div style={{borderRadius:'50%', width:'60px',height:'60px'}}>
                    < img src={ele.photoUrl} style={{borderRadius:'50%', width:'60px',height:'60px'}} alt="..."/>
                </div>
                
        })}
    </div>
  )
}

export default Status
