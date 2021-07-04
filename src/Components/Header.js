import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// style import
import '../styles/header.scss'

function Header() {
  const [toggler, setToggler] = useState(false);

  const [activeNav, setactiveNav] = useState();

  const [mOver, setMOver] = useState(0);

  let location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    setToggler(false);
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === "/"
      ? setactiveNav(1)
      : location.pathname === "/get-form/"
      ? setactiveNav(2)
      : location.pathname === "/update-form/"
      ? setactiveNav(3)
      : setactiveNav();
  }, [location.pathname]);

  return (
    <>
      <header className="genarel_header">
        <div className="header__box">
          <div className="header__logo">
            <Link name="logo" to="/">
              <img src='/xpeedstudio_logo_header.png' alt="" />
            </Link>
          </div>

          <div
            className={`phone__nav__icon `}
            onClick={() => setToggler(!toggler)}
            tabIndex="0"
          >
            <div className={toggler ? "hamInner active" : "hamInner"}></div>
          </div>
        </div>

        <nav className={`big__nav ${toggler ? "phone__nav" : ""}`} id="nav">
          <Link
            className={`nav__items ${activeNav === 1 ? "active" : ""}  ${
              mOver === 0 ? "" : mOver === 1 ? "hover" : "nover"
            }`}
            onBlur={() => setMOver(0)}
            onFocus={() => setMOver(1)}
            onMouseOver={() => setMOver(1)}
            onMouseOut={() => setMOver(0)}
            to="/"
          >
            Table
          </Link>

          <Link
            className={`nav__items ${activeNav === 2 ? "active" : ""}  ${
              mOver === 0 ? "" : mOver === 2 ? "hover" : "nover"
            }`}
            onBlur={() => setMOver(0)}
            onFocus={() => setMOver(2)}
            onMouseOver={() => setMOver(2)}
            onMouseOut={() => setMOver(0)}
            to="/get-form/"
          >
            Get form
          </Link>

          <Link
            className={`nav__items ${activeNav === 3 ? "active" : ""}  ${
              mOver === 0 ? "" : mOver === 3 ? "hover" : "nover"
            }`}
            onBlur={() => setMOver(0)}
            onFocus={() => setMOver(3)}
            onMouseOver={() => setMOver(3)}
            onMouseOut={() => setMOver(0)}
            to="/update-form/"
          >
            Update Form
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;