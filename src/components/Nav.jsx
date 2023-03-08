import React from "react";
import logo from "../assets/Capture-removebg-preview.png";

function Nav() {
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__logo--wrapper">
          <img src={logo} alt="" className="logo" />
        </div>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#"
              class="nav__link--anchor link__hover-effect link__hover-effect--black click">
              Home
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#"
              class="nav__link--anchor link__hover-effect link__hover-effect--black click">
              Find a Show
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#"
              class="nav__link--anchor link__hover-effect link__hover-effect--black click">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
