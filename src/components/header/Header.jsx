


import React, { useState } from "react";
import "./Header.scss";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
//   const [isFixed, setIsFixed] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setIsFixed(true);
//     } else {
//       setIsFixed(false);
//     }
//   };

  return (
    <div className="nav-wrapper">
      <div className="row">
        <nav className="nav flex-col">
          <div className="nav_laptop">
            <div className="">
              {/* <img src={images.logo} alt="app logo" className="" /> */}
              <div className="header__logo">
         <h3>Sai Aruna </h3>
         <span>Multicuisine Restaurant</span>
      </div>
            </div>
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#home">Home</a>
              </li>
              <li className="nav__item">
                <a href="#documentation">About</a>
              </li>
              <li className="nav__item">
                <a href="#menu">Menu</a>
              </li>
              <li className="nav__item">
                <a href="#awards">Catering Services</a>
              </li>
              <li className="nav__item">
                <a href="#contact">Gallaery</a>
              </li>
              <li className="nav__item">
                  <a href="#contact">Contact Us</a>
                </li>
            </ul>

            <div
              className="nav__hamburger"
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            {toggleMenu && (
              <ul className="mobile_view">
                <li className="nav__item">
                  <a href="#home">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#documentation">About</a>
                </li>
                <li className="nav__item">
                  <a href="#menu">Menu</a>
                </li>
                <li className="nav__item">
                  <a href="#awards">Catering Services</a>
                </li>
                <li className="nav__item">
                  <a href="#contact">Gallaery</a>
                </li>
                <li className="nav__item">
                  <a href="#contact">Contact Us</a>
                </li>
                <button className="nav__item nav__item_button" onClick={() => setToggleMenu((prev) => !prev)}>
                   close
                </button>
               
              </ul>
            )}
              <button className="nav__button" ><p>Oreder Now</p></button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;