import React from 'react'
import dummyData from "../../dummyData";
const Register = () => {
    const obj ={username:"", password:""}
    function changeHandler(event){
        obj[event.target.name]=event.target.value;
    }

    function SignupHandler(){
        dummyData.push(obj);
        console.log(dummyData);
    }
  return (
    <div>
      <input type="text" placeholder='Enter Username' name="username" onChange={changeHandler}/>
      <input type="password" placeholder='Enter password' name="password" onChange={changeHandler}/>
      <button onClick={SignupHandler}>SignUp</button>
    </div>
  )
}

export default Register
