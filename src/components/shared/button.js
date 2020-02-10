import React from "react";
import { checkPropTypes } from "prop-types";

function Button(props) {
  return <button className={props.btnClass}>{props.btnText}</button>;
}
export default Button;
