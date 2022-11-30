import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import image from "./group.jpeg"

import JoslinPage from "./Components/JoslinPage";
import BensPage from "./Components/BensPage";

import JoslinExperience from "./Components/JoslinExperience";
import JoslinProjects from "./Components/JoslinProjects";
import JoslinResume from "./Components/JoslinResume";
import JoslinAbout from "./Components/JoslinAbout";
import Adnane from './Components/adnane';
import Home from './Components/Home';
import Justin from "./Components/Justin"
function App() {
  return (
    <div className="App" >

      <Router>
          <Navbar/>

        <Routes>
            <Route path='/joslin' element={<JoslinPage/>}/>
            <Route path='/joslin/Experience' element={<JoslinExperience/>}/>
            <Route path='/joslin/Projects' element={<JoslinProjects/>}/>
            <Route path='/joslin/Resume' element={<JoslinResume/>}/>
            <Route path='/joslin/About' element={<JoslinAbout/>}/>
            <Route path='/adnane' element={<Adnane/>} />
            <Route path='/Justin' element={<Justin/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/ben' element={<BensPage/>}/>


        </Routes>
      </Router>
      </div>
  );
}

export default App;
