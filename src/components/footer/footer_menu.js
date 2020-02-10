import React from "react";
import { checkPropTypes } from "prop-types";

function Footer_Menu(props) {
  return (
    <li class="nav__item">
      <a href="#" class="nav__link">
        {props.text}
      </a>
    </li>
  );
}
export default Footer_Menu;
