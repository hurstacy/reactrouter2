
import { Routes, Route, Link } from "react-router-dom";
import './index.css'
import Blue from './components/Blue.jsx';
import './App.css'
import Red from './components/Red.jsx'
import Home from './components/Home.jsx'
import Yellow from './components/Yellow.jsx'
export default function App() {


  return (
  
    <><div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/red" className="red-link">Red</Link>
        <Link to="/blue" className="blue-link">Blue</Link>
        <Link to="/yellow" className="yellow-link">Yellow</Link>
      
    </div>
    <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </div></>


  )
}

App
