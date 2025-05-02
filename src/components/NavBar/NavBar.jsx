import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useState } from "react";
import About from "../../pages/About";
import Room from "../../pages/Room";
import App from "../../App";
import "./NavBar.css";
function NavBar() {
  return (<>
 
 <nav className="space-x-4 text-lg font-semibold flex">
  <Link to="/" className="hover:underline">Home</Link>          {/* Updated to Link */}
  <Link to="/about" className="hover:underline">About</Link>    {/* Updated to Link */}
    {/* Updated to Link */}
    {/* Updated to Link */}
</nav>
    </>
  );
}

export default NavBar;
