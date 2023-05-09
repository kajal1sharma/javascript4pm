import React,{useState} from "react";
import Header from "./component/todoList/Header"
import InputBox from "./component/todoList/InputBox";
import TaskDisplayer from "./component/todoList/TaskDisplayer";
function App() {

  const [data, setData] =useState([]);

  function clickHandler(task){
    setData([...data, task]);
  }
  return (
 <div>
  <Header/>
  {/* <InputBox setData={setData} data={data}/> */}
  <InputBox clickHandler={clickHandler}/>
  <TaskDisplayer data={data}/>
 </div>
  );
}

export default App;
