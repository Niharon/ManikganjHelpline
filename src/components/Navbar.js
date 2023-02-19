import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/mjhelp1.png";
import "./NavbarStyle.css";
const Navbar = () => {
  return (
    <div>
      <section id="navbar_section">
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <i className="fa fa-bars" id="btn"></i>
            <i className="fa fa-times" id="cancel"></i>
          </label>
          <div className="brandLogo">
            <Link to="/">
              <img src={Logo} alt="no-image"></img>
            </Link>
          </div>
          <div className="NavLinks">
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
            <NavLink to="/manikganj" className="navLink">
              Manikganj
            </NavLink>
            <NavLink to="/media" className="navLink">
              Media
            </NavLink>
            <NavLink to="/others" className="navLink">
              Others
            </NavLink>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
