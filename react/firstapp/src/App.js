import React from "react";
import Header from "./component/todoList/Header"
import InputBox from "./component/todoList/InputBox";
function App() {
  return (
   
    <div >
      <div style={{border:"5px solid black"}}>
        <Header/>
      </div>
      <div style={{border:"5px solid black"}}>
        <InputBox/>
      </div>
      <div style={{border:"5px solid black"}}>
        hi this is next element
      </div>
    </div>
  );
}

export default App;
