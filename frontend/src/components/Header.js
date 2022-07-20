import React from "react";
import { Link } from "react-router-dom";
import logoPath from "../images/logo.svg";

export default function Header({ loggedIn, email, logout, textButton, link }) {
  return (
    <header className="header container__header">
      <img className="header__logo" src={logoPath} alt="Логотип" />
      <div className="header__menu">
        {loggedIn && <p className="header__email">{email}</p>}
        {loggedIn ? (
          <button className="header__button" onClick={logout}>
            Выйти
          </button>
        ) : (
          <Link className="header__button" to={link}>
            {textButton}
          </Link>
        )}
      </div>
    </header>
  );
}
