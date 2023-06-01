import logo from './logo.svg';
import './App.css';
//import Home from "./components/Home"
//import  {Home2,Home} from "./components/Home" 
// import About from './components/About';
import { About,Home ,Home2} from './components';
import React from 'react';
class App extends React.Component {

  constructor(props){
    super(props);

    this.state= {value:true}

  }
changeHandler(event){
  console.log(event.target.value)

}

render(){
  if(this.state.value===true){
    return (

      <div className="App">
<button onClick={()=>{
       let newVar = this.state.value?false:true
        this.setState({value:newVar})
      }}>Click</button>
      <Home text="hello from App"/>
       <Home2/>
       </div>
    )
  }
  else
  return (
     <div>   
      <button onClick={()=>{
          let newVar = this.state.value?false:true
          this.setState({value:newVar})
      }}>Click</button>
     <About changeHandler={this.changeHandler}/>
    </div>
  );
}
}

export default App;
