import React from "react";
import { BrowserRouter as Router,Route,Switch,Link, Routes } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Contact from './Contact';
import NotFound from './NotFound';

function App(){
  return(
    <Router>
      <nav>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/*" Component={NotFound}/>
      </Routes>

    </Router>
    
  );
}

export default App;