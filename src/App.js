import React from "react";
import Navbar from "./Components1/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./Components1/Cards/Home";
import Projects from "./Components1/Cards/Projects";
// import Resume from "./Components1/Cards/Resume";

function App() {
  return (
    <>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        {/* <Route path='resume' element={<Resume/>} /> */}
      </Routes>
      
    </>

      
    
  );
}

export default App;
