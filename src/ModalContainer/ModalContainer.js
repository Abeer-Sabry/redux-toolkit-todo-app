import React from "react";
import Style from "./ModalContainer.module.css";
export const ModalContainer = props => {
  return (
    <div className={Style.modalContainer}>
      <div className={Style.modalDiv}>
        <h2 className={Style.heading}>{props.h2}</h2>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
