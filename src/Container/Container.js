import React from "react";
import Style from "./Style.module.css";
const Container = props => {
  return <div className={Style.padding}>{props.children}</div>;
};

export default Container;
