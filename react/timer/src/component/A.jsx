import React from "react";

function A({title}){
    console.log(title);
    return (
        <div style={{width:"300px", height:"300px",backgroundColor:"green"}}>
            <h1>this is Element A</h1>
            <h2>{title}</h2>
        </div>
    )
}


export default A;