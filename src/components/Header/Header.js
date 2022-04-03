import React from "react";
import Style from "./headerStyle.module.css";
const Header = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.heading}>
        <h2>My Todo List</h2>
      </div>
    </div>
  );
};

export default Header;
