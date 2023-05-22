import { useContext ,useState} from "react";
import ThemeContext from "../context/Theme";

function InputTask({text,updateHandler,id}){
    const theme =useContext(ThemeContext)

    //let str=text;
    
    console.log(theme);
    const [str,setStr] =useState(text);
    const [edit, setEdit] =useState(false);
    if(edit===true){
      return <div>
        <input onChange={(event)=>{setStr(event.target.value);console.log(str)}} value={str}  />
        <button style={{backgroundColor:theme.savebuttoncolor}} onClick={()=>{
                setEdit(false);
                updateHandler(str,id)
              }}>Save</button>
      </div>
    }
    else{
      return <div>
        <p>{text}</p>
        <button  onClick={()=>{
                setEdit(true);
              }}>Edit</button>
      </div>
    }
  
  }
  
  export default InputTask