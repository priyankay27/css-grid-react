import React from "react";
import logo from "../../img/logo.png";
import logo_bbc from "../../img/logo-bbc.png";
import logo_forbes from "../../img/logo-forbes.png";
import logo_techcrunch from "../../img/logo-techcrunch.png";
import logo_bi from "../../img/logo-bi.png";
import Button from "../shared/button";

function Header() {
  return (
    <header class="header">
      <img src={logo} alt="Nexter logo" class="header__logo" />
      <h3 class="heading-3">Your own home:</h3>
      <h1 class="heading-1">The ultimate personal freedom</h1>
      <Button btnClass="btn header__btn" btnText="View our properties" />
      <div class="header__seenon-text">Seen on</div>
      <div class="header__seenon-logos">
        <img src={logo_bbc} alt="Seen on logo 1" />
        <img src={logo_forbes} alt="Seen on logo 2" />
        <img src={logo_techcrunch} alt="Seen on logo 3" />
        <img src={logo_bi} alt="Seen on logo 4" />
      </div>
    </header>
  );
}
export default Header;
