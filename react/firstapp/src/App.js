import React,{useState} from "react";
import Header from "./component/todoList/Header"
import InputBox from "./component/todoList/InputBox";
import TaskDisplayer from "./component/todoList/TaskDisplayer";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import Menu from "./component/Restaurant/Menu";
function App() {

  const [login ,setLogin] = useState(false);
  const [data, setData] =useState([]);

  function clickHandler(task){
    setData([...data, task]);
  }
  return login===true ? (
 <div>
  <Header/> 
  <Menu/>
  {/* <InputBox setData={setData} data={data}/> */}
  <InputBox clickHandler={clickHandler}/>
  <TaskDisplayer data={data}/>
 </div>
  ):(
    <div>
      {/* Register
      <Register/> */}
      Login
      <Login setLogin={setLogin}/>
    </div>
  );
}

export default App;
