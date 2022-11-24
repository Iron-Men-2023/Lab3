import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import image from "./group.jpeg"
import JoslinPage from "./Components/JoslinPage";
import JoslinExperience from "./Components/JoslinExperience";
function App() {
  return (
    <div className="App">

      <Router>
          <Navbar/>

        <Routes>
            <Route path='/joslin' element={<JoslinPage/>}/>
            <Route path='/joslin/Experience' element={<JoslinExperience/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
