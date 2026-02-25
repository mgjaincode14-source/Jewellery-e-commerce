import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {

  const navigate = useNavigate();

  return (
    <>
      <nav className='Stick'>
        <div className="first">
          {props.heading}
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          <li onClick={() => navigate("/cardxqr")}>Visiting Card</li>
        </div>

        {/* <div className="mid">
          <input type="search" id="search" placeholder="Search here..." />
        </div> */}

        <div className="last">
          <label className="box" onClick={() => navigate("/cart")}>
            My Cart
          </label>

          <label className="box" onClick={() => navigate("/signup")}>
            Sign Up
          </label>

          <label className="box" onClick={() => navigate("/login")}>
            Log In
          </label>
        </div>
      </nav>
    </>
  );
}
