import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import image from "./group.jpeg"
function App() {
  return (
    <div className="App">

      <Router>
          <Navbar/>
          <img src={image}/>
        <Routes>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
