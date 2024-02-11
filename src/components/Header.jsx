import React from "react";
import Logo from "../assets/logo.png";
import Menu from "./Menu";

function Header() {
  return (
    <header>
      <div className="contacts">
        <div className="contact-methods">
          <ul>
            <li className="contact">
              <i className="fa-solid fa-phone-flip"></i>
              <a href="tel:111-222-3334">111-222-3334</a>
            </li>
            <li className="contact">
              <i className="fa-solid fa-phone-flip"></i>
              <a href="tel:123-456-7899">123-456-7899</a>
            </li>
            <li className="contact">
              <i className="fa-regular fa-envelope"></i>{" "}
              <a href="mailto:random@gmail.com">random@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul>
            <li className="link">
              <a target="_blank" href="https://facebook.com">
                <i className="fa-brands fa-facebook-f"></i>{" "}
              </a>
            </li>
            <li className="link">
              <a target="_blank" href="https://twitter.com">
                <i className="fa-brands fa-twitter"></i>{" "}
              </a>
            </li>
            <li className="link">
              <a target="_blank" href="https://youtube.com">
                <i className="fa-brands fa-youtube"></i>{" "}
              </a>
            </li>
            <li className="link">
              <a target="_blank" href="https://linkedin.com">
                <i className="fa-brands fa-linkedin-in"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div className="logo">
          <a href="/">
            <img src={Logo} />
          </a>
        </div>

        <Menu />
      </nav>
    </header>
  );
}

export default Header;
