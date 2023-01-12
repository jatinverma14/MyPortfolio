import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <>
      <div className="navbar__container">
        <div className="portfolioLogo">
          <img className="logoImg" src={images.logo} alt="img" />
        </div>
        <ul className="navbarItems">
          {["Home", "About", "Skills", "Projects", "Linktree", "Contact"].map(
            (item) => (
              <li key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
