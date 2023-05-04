import React from "react";

function B({arr}){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    
    return (
        <div style={{marginLeft:"500px",width:"300px",height:"300px",backgroundColor:"pink"}}>
            <h1>hi iam component B</h1>
            <h2>{arr}</h2>
            {arr.map((ele)=>{
                return  <p>{ele*2}</p> 
            })}
        </div>
    )
}


export default B;