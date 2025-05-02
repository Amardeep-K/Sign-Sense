import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Room from "./pages/Room";
import logo from "./assets/SS.png";  
import About from "./pages/About"
import Home from "./pages/Home";
import "./App.css";
import Layout from './pages/Layout'; 
import NavBar from "./components/NavBar/NavBar";
const Button = ({ children, className = '', ...props }) => (
  <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
    {children}
  </button>
);
const App = () => {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="room" element={<Room />} />
      </Route>
    </Routes>
      
    </>
  );
};

export default App;
