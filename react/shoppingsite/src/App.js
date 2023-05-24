import logo from './logo.svg';
import './App.css';
import FirstComp from './FirstComp';
import { useEffect } from 'react';
import { getProduct,db } from './firebase/firebase';
function App() {

( async function (){
  const arr=await getProduct(db);
  console.log(arr)
 })()
       


  return (

    <div className="App" style={{border:'5px solid black'}}>
        App
    </div>
  );
}

export default App;
