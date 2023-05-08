import React,{useState} from "react";
import Header from "./component/todoList/Header"
import InputBox from "./component/todoList/InputBox";
import TaskDisplayer from "./component/todoList/TaskDisplayer";
function App() {

  const [data, setData] =useState([]);

  return (
 <div>
  <Header/>
  <InputBox setData={setData} data={data}/>
  <TaskDisplayer data={data}/>
 </div>
  );
}

export default App;
