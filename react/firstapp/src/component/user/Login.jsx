import React from 'react'
import dummyData from "../../dummyData";
const Login = ({setLogin}) => {
    const obj ={username:"", password:""}
    function changeHandler(event){
        obj[event.target.name]=event.target.value;
    }

    function LoginHandler(){
        dummyData.forEach(ele=>{
            if(ele.username===obj.username && ele.password===obj.password){
                setLogin(true);
            }
        })
    }
  return (
    <div>
      <input type="text" placeholder='Enter Username' name="username" onChange={changeHandler}/>
      <input type="password" placeholder='Enter password' name="password" onChange={changeHandler}/>
      <button onClick={LoginHandler}>Signin</button>
    </div>
  )
}

export default Login
