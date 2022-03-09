import React from "react";
import { HashRouter,Routes, Route, Link } from "react-router-dom"; 
import Myclass12 from "./class/class12";

function App() {
  return (
    <HashRouter>

        <li className="nav-item">
          <Link className="nav-link text-white"  to="/login"> Mylogin</Link>
        </li>
  <Routes>
     
     <Route exact path="/login" element = {<Myclass12/>}/>
    
  </Routes>
</HashRouter>
  );
}

export default App;
