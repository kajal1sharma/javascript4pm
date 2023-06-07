import React from 'react'
import store from './redux/store'
import { useState } from 'react'
const Dispalyer = () => {
    const [value,setvalue] =useState(0)
let state = {value:0};
    function render(){
        state = store.getState()
        console.log(state);
        setvalue(state.value);
    }
    store.subscribe(render);

  return (
    <div>
     <h1>{value}</h1> 
    </div>
  )
}

export default Dispalyer
