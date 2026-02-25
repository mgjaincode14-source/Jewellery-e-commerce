import React from "react";
import "./qr.css";
import viscardImg from "../Images/VisCard.png";

import { useNavigate } from "react-router-dom";
function Cardxqr() {
  const navigate = useNavigate();
  return (
    <>
      <div className="dual">
        <div className="steps">
          <button className="symX" onClick={() => navigate("/")}>
            X
          </button>

          <div className="cardpic">
            &nbsp;<img src={viscardImg} alt="" height="300"/>
          </div>

          <div className="qrpic">
            &nbsp;&nbsp;&nbsp;<a href="https://www.google.co.in/maps/place/P+P+COLLECTIONS/@13.0915111,80.2758317,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526f561890d7d5:0xecd87acb0a588d86!8m2!3d13.0915111!4d80.2784066!16s%2Fg%2F11c60mrhny?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"> Click to get Location </a>
          </div>


        </div>
      </div>
    </>
  );
}

export default Cardxqr;
