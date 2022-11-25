import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import image from "./group.jpeg"
import Adnane from './adnane';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/adnane' element={<Adnane />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
