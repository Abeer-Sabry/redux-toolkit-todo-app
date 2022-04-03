import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import ListItem from "./Item/ListItem";
import ConfirmBtn from "../../reuseable components/ConfirmBtn/ConfirmBtn";
import CompletedTodo from "../CompletedTodo/CompletedTodo";
import TotalItems from "../TotalItems/TotalItems";
// --- STYLE --- //
import listStyle from "./ListStyle.module.css";
// --- REDUX --- //
import { getTodoAsync } from "../../Redux/todoSlice";
import { updateRequest } from "../../Redux/updateSlice/updateSlice";
import { confirmDelete } from "../../Redux/deleteSlice/deleteSlice";
import Loader from "../Loader/Loader";

const TodoList = () => {
  // REDUX
  const { loading, todoItems } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <>
      <div className={listStyle.heading}>TodoList</div>
      {loading ? (
        <Loader />
      ) : (
        <table className={listStyle.table}>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoItems.map(todo => (
              <tr key={todo.id}>
                <td>
                  <ListItem id={todo.id} title={todo.title} completed={todo.completed} />
                </td>

                <td>
                  <ConfirmBtn onClick={() => dispatch(updateRequest(todo))} className="do">
                    Update
                  </ConfirmBtn>
                  <ConfirmBtn onClick={() => dispatch(confirmDelete(todo))} className="delete">
                    Delete
                  </ConfirmBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <TotalItems />
      <CompletedTodo />
    </>
  );
};

export default TodoList;
