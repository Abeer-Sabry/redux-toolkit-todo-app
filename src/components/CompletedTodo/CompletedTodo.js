import React, { useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { getCompletedAsync } from "../../Redux/todoSlice";
import { updateTodoAsync } from "../../Redux/updateSlice/updateSlice";
import { deleteTodoAsync } from "../../Redux/deleteSlice/deleteSlice";
// ---- STYLE ---- //
import Style from "./CompletedStyle.module.css";
// ---- REACT-ICONS ---- //
import { FaCheckSquare, FaUndoAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CompletedTodo = () => {
  // REDUX
  const { completedItems } = useSelector(state => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompletedAsync());
  }, [dispatch]);
  return (
    <div className={Style.wrapper}>
      {completedItems.map(item => (
        <div className={Style.info} key={item.id}>
          <div className={Style.completed}>
            <span
              className={Style.checked}
              onClick={() => dispatch(updateTodoAsync({ ...item, completed: !item.completed }))}
            >
              {" "}
              <FaCheckSquare />
            </span>
            <h4 className={Style.heading}>
              Your Todo <span className={Style.title}>{item.title}</span> Is Completed
            </h4>
          </div>
          <div className={Style.icons}>
            {" "}
            <span
              onClick={() => dispatch(updateTodoAsync({ ...item, completed: !item.completed }))}
              className={Style.undo}
            >
              {" "}
              <FaUndoAlt />
            </span>
            <span onClick={() => dispatch(deleteTodoAsync(item.id))} className={Style.delete}>
              {" "}
              <RiDeleteBin5Fill />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTodo;
