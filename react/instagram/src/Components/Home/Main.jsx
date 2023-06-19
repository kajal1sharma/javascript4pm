import React from 'react'
let data =[
    {name:"Taylor swift",post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJW5CHlRgNL4RmKo7Oll-atYWmVxFTAyrZk0NcAYtJw&s",photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s" , url:"https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg", comments:[{name:"alyson",comment:"i like the picture"},{name:"david",comment:"nice picture"},{name:"john", comment:"really like the picture"}]},
    {name:"Taylor swift",post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJW5CHlRgNL4RmKo7Oll-atYWmVxFTAyrZk0NcAYtJw&s",photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s" , url:"https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg", comments:[{name:"alyson",comment:"i like the picture"},{name:"david",comment:"nice picture"},{name:"john", comment:"really like the picture"}]},
]
const Main = () => {
  return (
    <div style={{width:'400px', backgroundColor:"pink"}}>
      {data.map(ele=>{
        return <div>
                <header style={{height:'100px',width:"100%"}}>
                    <img src={ele.url} style={{height:"40px", width:"40px", borderRadius:"50%"}} alt=".."/>
                </header>
                <Main style={{width:"100%"}}>
                
                    <img src={ele.photoUrl} alt=".." style={{width:"100%"}}/>
                    <section>
                        {ele.comments.map(comment=>{
                            <div><span>{comment.name}</span><span>{comment.comment}</span></div>
                        })}
                   </section>
                </Main>
                
            </div>
      })}
    </div>
  )
}

export default Main
