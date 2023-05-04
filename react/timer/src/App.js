import logo from './logo.svg';
import './App.css';
import {Timer1 } from "./component/Timer"
import A from "./component/A";
import B from "./component/B"
function App() {
  return (
    <div style={{height:"90vh", width:"90vw",border:"5px solid black"}}>
     <h1> this is App.js file </h1>
     <A title="Iam A Component"  title2="numberr of rops can be passed"/>
     <B  arr={[1,2,3,4,5]}/>
    
    </div>
  );
}

export default App;
