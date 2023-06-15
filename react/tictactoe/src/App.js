import logo from './logo.svg';
import './App.css';
import Tictactoe from './Tictactoe';
import { useRef, useState } from 'react';

function App() {

  const [data, setData] = useState(["1","2","3","4","5","6","7","8","9"])
  const currPlayer = useRef('x')
  function clickHandler(event){
    let index = Number(event.target.id);
    let arr =data;    
    arr=arr.slice(0,index).concat([currPlayer.current]).concat(arr.slice(index+1))
    console.log(arr,currPlayer)

    if(currPlayer.current==='x'){
      currPlayer.current='o'
    }
    else{
      currPlayer.current='x'
    }
    setData(arr);
  }
  return (
    <div className="App">
        <h1>Tic Tac Toe</h1>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Tictactoe data={data} clickHandler={clickHandler}/>
        </div>
        
    </div>
  );
}

export default App;
