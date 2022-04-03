import React from "react";
//  ---- STYLE ---- //
import Style from "./ItemStyle.module.css";
// ---- REDUX ---- //
import { useDispatch } from "react-redux";
import { updateTodoAsync } from "../../../Redux/updateSlice/updateSlice";
// --- ANT DESIGN ---- //
import { Checkbox } from "antd";

const ListItem = ({ id, title, completed }) => {
  // REDUX
  const dispatch = useDispatch();
  // FUNC
  const handleCompleteClick = e => {
    dispatch(updateTodoAsync({ id, title, completed: e.target.checked }));
  };

  return (
    <li className={Style.list}>
      <span className={Style.checkDiv}>
        <Checkbox className={Style.box} checked={completed} onChange={handleCompleteClick}>
          {title}
        </Checkbox>
      </span>
    </li>
  );
};

export default ListItem;
