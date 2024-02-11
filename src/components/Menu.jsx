import React, { useEffect, useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";

function Menu() {
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  return (
    <>
      <div
        className="menu-icon"
        onClick={(e) => {
          setMenuDisplayed(true);
        }}
      >
        <i class="fa-solid fa-bars"></i>
      </div>
      <OutsideClickHandler
        excludedSelectors={[".menu-icon", ".menu"]}
        onOutsideClick={() => {
          setMenuDisplayed(false);
        }}
      >
        <div
          className="menu"
          style={menuDisplayed ? { transform: "translateX(-160px)" } : {}}
        >
          <span
            onClick={() => {
              setMenuDisplayed(false);
            }}
          >
            X
          </span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#services">Book Now</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#cars">Cars</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
      {menuDisplayed && <div className="overlay"></div>}
    </>
  );
}

export default Menu;
