import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Menu = () => (
  <>
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#info">What is GPT?</a>
      </li>
      <li>
        <a href="#possibility">Open AI</a>
      </li>
      <li>
        <a href="#features">Case Studies</a>
      </li>
      <li>
        <a href="#blog">Library</a>
      </li>
    </ul>
  </>
);

const Sign = () => (
  <>
    <ul>
      <li>
        <span>Sign in</span>
      </li>
      <li>
        <button type="button">Sign up</button>
      </li>
    </ul>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="web__navbar">
      <div className="web__navbar-links">
        <div className="web__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="web__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="web__navbar-sign">
        <Sign />
      </div>
      <div className="web__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="web__navbar-menu_container scale-up-tr">
            <div className="web__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="web__navbar-menu_container-links-sign">
              <Sign />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
