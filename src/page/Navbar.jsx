import React from "react";
import "./navbar.css";
import image from "../image/image.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <nav className="nav-header">
        <div className="logo">
          <Link className="" to="">
            <img src={image} alt="logo" />
          </Link>
          <Link className="" to="">
            <h6>Commerce</h6>
          </Link>
        </div>
        <div className="links">
          <ul className="tags">
            <li>
              <i className="bi bi-house"></i>
              <Link className="li-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="bi bi-file-earmark"></i>
              <Link className="li-link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i>
              <Link className="li-link" to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <i className="bi bi-credit-card-fill"></i>
              <Link className="li-link" to="/payment">
                Payment
              </Link>
            </li>
            <li>
              <i className="bi bi-cart-fill"></i>
              <Link className="li-link" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="div-button">
          <Link to="/login" className="button">
            <button type="submit">Log In</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
