import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import Dispalyer from './Dispalyer';
function App() {
  
  // function render() {
  //   const state = store.getState();
  //   console.log(state);
  // }
  // store.subscribe(render);

  
  function incrementHandler(){
    store.dispatch({type:'increment'})
  }
  function decrementHandler(){
    store.dispatch({type:'decrement'})
  }

  return (
    <div className="App">
     App
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <Dispalyer/>
    </div>
  );
}

export default App;
