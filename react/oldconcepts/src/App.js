import logo from './logo.svg';
import './App.css';
//import Home from "./components/Home"
//import  {Home2,Home} from "./components/Home" 
// import About from './components/About';
import { About,Home ,Home2} from './components';
function App() {

  return (
    <div className="App">
     <Home/>
   <Home2/>
     <About/>
    </div>
  );
}

export default App;
