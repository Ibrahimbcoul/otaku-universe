import React from "react";

const Header = () => {
  return (
    <div id="header" style={{ backgroundImage: 'url("./all.jpg")' }}>
      <div id="logo">
        <h1>
          <span id="otaku">Otaku's</span> <span id="universe">Universe</span>
        </h1>
      </div>
      <nav id="navbar">
        <ul>
          <li>
            <a href="">
              <span href="#header">ACCEUIL</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span href="#header">A PROPOS</span>
            </a>
          </li>
          <li>
            <a href="#event">
              <span href="#header">EVENEMENT</span>
            </a>
          </li>

          <li>
            <a href="#contact">
              <span href="#header">CONTACT</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
