// src/components/Header.jsx
import React from 'react';
import { Routes, Route, Link,useNavigate } from 'react-router-dom';
import logo from '../assets/SS.png';  // Make sure the path is correct
import NavBar from './NavBar/NavBar';  // Assuming NavBar is separate
 // Reusable button component
 const Button = ({ children, className = '', ...props }) => (
    <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
  

const Header = () => {
    const navigate = useNavigate();
    const handleCreateRoom = () => {
        navigate('/room');
      };
  return (
    <header className="flex justify-between items-center p-6">
      <div className="nav-brand flex items-center">
        <img src={logo} alt="Logo" className="logo-image me-2 w-24 h-auto" />
      </div>
      <NavBar />
      <Button onClick={handleCreateRoom}  className="bg-white text-black">Create Room</Button>
    </header>
  );
};

export default Header;
