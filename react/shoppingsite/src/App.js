import logo from './logo.svg';
import './App.css';
import FirstComp from './FirstComp';
import { useEffect, useState } from 'react';
import { arr } from './firebase/firebase';
function App() {

const [data, setData] =useState([])
       
useEffect(()=>{

  setData(arr);
  console.log(arr,"====")
},[])


  return (

    <div className="App" style={{border:'5px solid black'}}>
        App
        {
          data.map(ele=>{
            return <li>{ele.productname}</li>
          })
        }
    </div>
  );
}

export default App;
