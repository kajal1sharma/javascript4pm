import React from 'react'

const Dish = ({imageUrl, title}) => {
  return (
       <div style={{backgroundColor:"black",display:"flex", flexDirection:"row", width:"20vw"}}>
        <div>
            <img src={imageUrl} alt="" style={{width:"100px", height:"100px"}}/>
        </div>
        <div>
            <div style={{display:'flex',alignItems:"center"}}>
                <h3 style={{color:"white", fontSize:"16px", width:"100px"}} >{title}</h3>
                <div style={{borderTop:"1px solid grey",borderBottom:"1px solid grey", height:"5px",width:"100px"}}></div>
                <span style={{color:"gold"}}>$25.50</span>
            </div>
            <p style={{color:'grey', fontSize:"12px"}}>Tomatoes, green bell pepper , sliced cucumber onion, olives, and feta cheese</p>
        </div>
     </div>   
  )
}

export default Dish
