import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? 'white' : 'black',
    color: isActive ? 'black' : 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block'
  });

  return (
    <nav className='Stick'>
      <div className="first">
        {props.heading}
        <NavLink style={navLinkStyle} to="/">Home</NavLink>
        <NavLink style={navLinkStyle} to="/about">About Us</NavLink>
        <NavLink style={navLinkStyle} to="/contact">Contact</NavLink>
        <NavLink style={navLinkStyle} to="/cardxqr">Visiting Card</NavLink>
      </div>

      <div className="last">
        <NavLink  style={navLinkStyle} to="/cart">My Cart</NavLink>
        <NavLink  style={navLinkStyle} to="/signup">Sign Up</NavLink>
        <NavLink  style={navLinkStyle} to="/login">Log In</NavLink>
      </div>
    </nav>
  );
}