import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [isMobView, setIsMobView] = useState(false);
  const [isCrossBurger, setIsCrossBurger] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const navItems = [
    "Home", 
    "About",
    "Skills",
    "Projects",
    "Resume",
    "Contact",
  ]

  const handleHamburgerClick = (event) => {
    setIsMobView(!isMobView);
    setIsCrossBurger(!isCrossBurger);
    const nav_links = document.querySelectorAll(".navbarLinkItem");
    nav_links.forEach((link, number, event) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `fade 0.5s ease forwards ${number / 6 + 0.2}s`;
    });
  };
  const handleScrollDown = () => {
    if (window.scrollY >= 80) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  const handleNavClick = (event) => {
    handleHamburgerClick(event);
  };

  window.addEventListener("scroll", handleScrollDown);
  return (
    <>
      <nav className={`navbar__container ${isScrollDown ? "navBar_scroll" : null}`} onScroll={handleScrollDown}>
        <div className="portfolioLogo">
          <img className="logoImg" src={images.logo} alt="img" />
        </div>
        <ul className={`navbarItems ${isMobView ? "mobileView" : null}`}>
          {navItems.map(
            (item) => (
              <li className="navbarLinkItem home_comp" key={`link-${item}`}>
                {
                  ((item === "Resume")?(
                    <a href="https://drive.google.com/file/d/1AOsKwLq3sdR9CWWoznTYy4N2QZirJ6rx/view?usp=sharing" target="xyz">
                      {item}
                    </a>
                  ):(
                    <a href={`#${item}`} onClick={handleNavClick}>
                      {item}
                    </a>
                  ))
                }
              </li>
            )
          )}
        </ul>
        <div className="navbarHamburger" onClick={handleHamburgerClick}>
          <div className={`navBar_hamburger ${isCrossBurger ? "cross-burger" : null}`}>
            <div className="navbarLine1"></div>
            <div className="navbarLine2"></div>
            <div className="navbarLine3"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
