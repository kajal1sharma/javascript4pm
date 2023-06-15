import "./style.css"
import React from 'react'

const Tictactoe = (props) => {
    //let data= props.data;
    let {data, clickHandler} =props;

    

  return (
    <div>
        <div className='container'>
            {data.map((ele, index)=>{
                return <button id={index}  onClick={clickHandler} className="box">{ele}</button>
            })}
        </div>
    </div>
        
  )
}

export default Tictactoe
