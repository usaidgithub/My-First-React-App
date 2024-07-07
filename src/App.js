import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [textmode, settextmode] = useState('dark');
  const [node, setantinode] = useState('black');
  const [color, anticolor] = useState('black');
  const[about,setabout]=useState('black')
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      setantinode('white');
      anticolor('white');
      settextmode('light');
      setabout('white')
      document.body.style.backgroundColor = "#0a0a18";
    } else {
      setMode('light');
      setantinode('black');
      anticolor('black');
      settextmode('dark');
      setabout('black')
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar mode={mode} togglemode={togglemode} textmode={textmode} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About about={about}/>} />
          <Route path="/" element={<Textform heading="Enter the text below" color={color} node={node} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
