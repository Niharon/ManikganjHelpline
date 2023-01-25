import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/mjhelp1.png";
import "./NavbarStyle.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img className="brandLogo" src={Logo} alt="no-image"></img>
        </Link>

        <div>
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
    </div>
  );
};

export default Navbar;
