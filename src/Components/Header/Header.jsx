import React, { useState } from "react";
import "./Header.scss";
import logo__img from "../../img/Logo.png";
function Header() {
  const [vWidth, setVWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setVWidth(window.innerWidth);
  });
  return (
    <div className="Header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <a href="#/">
              <img src={logo__img} alt="img" />
            </a>
          </div>
          <ul className={vWidth <= 1013?'none':'header__list'}>
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
          <div
            className={vWidth <= 1013?'btn-group':' none'}
            role="group"
            aria-label="Button group with nested dropdown"
          >
            

            <div className={vWidth <= 1013?'btn-group':' none'} role="group">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <i className="bi bi-list"></i>
              </button>
              <ul class="dropdown-menu header__list1 ">
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
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
