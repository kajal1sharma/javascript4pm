import logo from './logo.svg';
import './App.css';
import Image from "./img/image1.webp"
import { useEffect, useState } from 'react';
import Restaurant from './Restaurant';
function App() {

  const [flag , setFlag] = useState(true);
 const [count, setcount] =useState(0);
 
  useEffect(()=>{
    console.log("flag value",flag);
  },[flag])

  function clickHandler(){
    setFlag(flag?false:true);
  }

  function countHandler(){
    setcount(count+1);
  }
  return (

    <div><div style={{width:'300px',height:'300px',objectFit:"contain" }}>
      {/* <img src={Image} alt=""/> */}
      {flag ===true && <img  height="300px" width={'300px'} alt="" src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg" />}
      </div>
      <button onClick={clickHandler}>Click</button>
      <h1>{count}</h1>
      <button onClick={countHandler}>Count Inc</button>
      <Restaurant/>
    </div>
  );
}

export default App;
