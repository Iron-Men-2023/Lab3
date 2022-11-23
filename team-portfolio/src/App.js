import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import image from "./group.jpeg"
import TeamPage from "./Components/TeamPage";
function App() {
  return (
    <div className="App">

      <Router>
          <Navbar/>

        <Routes>
            <Route path='/' element={<TeamPage/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
