import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import image from "./group.jpeg"
import homeGif from "./images/homeGif.gif"
import JoslinPage from "./Components/JoslinPage";
import JoslinExperience from "./Components/JoslinExperience";
import JoslinProjects from "./Components/JoslinProjects";
import JoslinResume from "./Components/JoslinResume";
import JoslinAbout from "./Components/JoslinAbout";
import Adnane from './Components/adnane';
import bg from"./images/bg.png"
import './Components/adnane.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

        </Routes>
      </Router>
      <img src={homeGif} alt="loading..." style={{ "right": 0, "position": "absolute" }} />

    <div className='adnane-container' style={{background:"#aa0505", height: "100%"}}>

      <div className='adnane-text-area'>
        
        <h1 style={{color:"#fbca03"}}> We are Iron-Men</h1>
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      <Row>
        <Col>
        <h1> Adnane</h1>
        <img src={bg} style={{height:100,width:100}}/>
        <div className='adnane-text-area'>
            <a style={{color:"#fbca03"}}> Description</a>
          </div>
        </Col>
        <Col>
        <h1>Ben</h1>
        <img src={bg} style={{height:100,width:100}}/>
        <div className='adnane-text-area'>
            <a style={{color:"#fbca03"}}> Description</a>
          </div>
        </Col>
        <Col>
        <h1> Joslin</h1>
        <img src={bg} style={{height:100,width:100}}/>
        <div className='adnane-text-area'>
            <a style={{color:"#fbca03"}}> Description</a>
          </div>
        </Col>
        <Col>
        <h1> Justin</h1>
        <img src={bg} style={{height:100,width:100}}/>
          <div className='adnane-text-area'>
            <a style={{color:"#fbca03"}}> Description</a>
          </div>
        </Col>
      </Row>
    </div>
      
    </div>
  );
}

export default App;
