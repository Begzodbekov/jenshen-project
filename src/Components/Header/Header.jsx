import React from "react";
import "./Header.scss";
import logo__img from "../../img/Logo.png";
function Header() {
  return (
    <div className="Header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <a href="#/"><img src={logo__img} alt="img" /></a>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <a href="#">Kompaniya haqida</a>
            </li>
            <li className="header__item">
              <a href="#">faktlar</a>
            </li>
            <li className="header__item">
              <a href="#">mahsulot</a>
            </li>
            <li className="header__item">
              <a href="#">UZ</a>
            </li>
            <li className="header__item">
              <a href="#">
                <button className="header__order">buyurtma berish</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
