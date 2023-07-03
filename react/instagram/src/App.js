
import './App.css';
import HomePage from "./Pages/Home"
import Contact from './Pages/Contact';
import Login from "./Pages/Login"
import { Link,BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="login" >Login</Link>
      <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>} />
      </Routes>
       <Footer/>
    </Router>
    </div>
  );
}

export default App;
