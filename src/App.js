import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";
import Home from "./Components/Homepage/Home"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
