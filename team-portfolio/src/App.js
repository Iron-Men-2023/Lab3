import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import image from "./group.jpeg"
import JoslinPage from "./Components/JoslinPage";
import BensPage from "./Components/BensPage";

function App() {
  return (
    <div className="App">

      <Router>
          <Navbar/>

        <Routes>
            <Route path='/joslin' element={<JoslinPage/>}/>
            <Route path='/ben' element={<BensPage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
