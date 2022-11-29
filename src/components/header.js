import { Dropdown } from "bootstrap";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Link } from "react-router-dom";
import logo from ".././assets/images/logo.png";
import searchIcon from ".././assets/images/search icon.png";

import "./header.css";
export default function Header() {
  return (
    <div id="header-container">
      <div id="logo-container">
        <img id="logo-img" src={logo}></img>
      </div>

      <div className="nav-container">
        <div className="nav-element">
          <a>Tornements ON FIFA+</a>
        </div>
        <div className="nav-element">
          <a>ABOUT FIFA</a>
        </div>
        <div className="nav-element">
          <a>WOMEN'S FOOTBALL</a>
        </div>
        <div className="nav-element">
          <a>SOCIAL IMPACT</a>
        </div>
        <div className="nav-element">
          <a>FOOTBALL DEVELOPMENT</a>
        </div>
        <div className="nav-element">
          <a>TECHNICAL</a>
        </div>

        <div className="nav-element">
          <a>LEGAL</a>
        </div>

        <div className="nav-element">
          <NavDropdown>
            <Link to='/privacy'>
              <DropdownItem>Privacy</DropdownItem>
            </Link>
            <Link to='/terms'>
              <DropdownItem>Terms</DropdownItem>
            </Link>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}
