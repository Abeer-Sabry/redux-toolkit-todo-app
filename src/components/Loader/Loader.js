import React from "react";
// ---- STYLE ---- //
import Style from "./LoaderStyle.module.css";
// ---- REACT-SPINNER ---- //
import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={Style.loader}>
      <DotLoader color={"rgb(74, 64, 223)"} size={60} />
    </div>
  );
};

export default Loader;
