import React from "react";
import '../goto/Nine.css';
import { Link } from "react-router-dom";
import necklaceImg from '../Images/Necklace.png';
import payalImg from '../Images/Payal.png';
import BsetImg from '../Images/Bridal.png';
import earImg from '../Images/Earring.png';
import bangleImg from '../Images/Bangles.png';

function BodyCards() {
  return (
    <>
      <div className="section-title">
        <h1>Looking For:-</h1>
      </div>

      <div className="threeitems">
        <div className="card">
          <img src={necklaceImg} className="card-img-top" alt="Necklace" />
          <div className="card-body">
            <h1 className="card-title">Necklace</h1>
            <p className="card-text">
              <i>Stylish necklace designed for modern fashion lovers — lightweight, trendy, and perfect for any outfit.</i>
            </p>
            <Link to="/collections/Necklace" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={payalImg} className="card-img-top" alt="Payal" />
          <div className="card-body">
            <h1 className="card-title">Silver Payal</h1>
            <p className="card-text">
              <i>Finely crafted silver payal that blends tradition with elegance for a sophisticated look.</i>
            </p>
            <Link to="/collections/Payal" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={BsetImg} className="card-img-top" alt="Bridal Set" />
          <div className="card-body">
            <h1 className="card-title">Bridal Set</h1>
            <p className="card-text">
              <i>Beautifully crafted bridal set designed to add elegance, sparkle, and timeless charm to your special wedding day.</i>
            </p>
            <Link to="/collections/BridalSet" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={earImg} className="card-img-top" alt="Earrings" />
          <div className="card-body">
            <h1 className="card-title">Earrings</h1>
            <p className="card-text">
              <i>Elegant earrings crafted to highlight your natural beauty with a touch of shine and sophistication.</i>
            </p>
            <Link to="/collections/Earrings" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={bangleImg} className="card-img-top" alt="Bangles" />
          <div className="card-body">
            <h1 className="card-title">Bangles</h1>
            <p className="card-text">
              <i>Whether you’re under the sun or the spotlights, these bangles are precision-crafted to sparkle from every angle.</i>
            </p>
            <Link to="/collections/Bangles" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={BsetImg} className="card-img-top" alt="Silver Payal" />
          <div className="card-body">
            <h1 className="card-title">Silver Payal</h1>
            <p className="card-text">
              <i>Beautifully crafted bridal set designed to add elegance, sparkle, and timeless charm to your special wedding day.</i>
            </p>
            <Link to="/collections/Payal" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={necklaceImg} className="card-img-top" alt="Play" />
          <div className="card-body">
            <h1 className="card-title">Play</h1>
            <p className="card-text">
              <i>Stylish necklace designed for modern fashion lovers — lightweight, trendy, and perfect for any outfit.</i>
            </p>
            <Link to="/collections/Necklace" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={payalImg} className="card-img-top" alt="Silver Payal" />
          <div className="card-body">
            <h1 className="card-title">Silver Payal</h1>
            <p className="card-text">
              <i>Finely crafted silver payal that blends tradition with elegance for a sophisticated look.</i>
            </p>
            <Link to="/collections/Necklace" className="Go_one">Look More</Link>
          </div>
        </div>

        <div className="card">
          <img src={BsetImg} className="card-img-top" alt="Bridal Set" />
          <div className="card-body">
            <h1 className="card-title">Bridal Set</h1>
            <p className="card-text">
              <i>Beautifully crafted bridal set designed to add elegance, sparkle, and timeless charm to your special wedding day.</i>
            </p>
            <Link to="/collections/Necklace" className="Go_one">Look More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyCards;