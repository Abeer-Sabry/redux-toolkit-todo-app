import React from "react";
import Style from "./ConfirmBtn.module.css";
const ConfirmBtn = props => {
  return (
    <button type={props.children} className={`${Style.confirm} + ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ConfirmBtn;
