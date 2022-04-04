import React, { useState } from "react";
// ---- REDUX ---- //
import { useDispatch } from "react-redux";
import { getTodoAsync } from "../../Redux/todoSlice";
import { createTodo } from "../../Redux/postSlice/postSlice";
// ---- COMPONENTS ---- //
import ConfirmBtn from "../../reuseable components/ConfirmBtn/ConfirmBtn";
// ---- STYLE ---- //
import Style from "./FormStyle.module.css";

const AddToForm = () => {
  // REDUX
  const dispatch = useDispatch();
  // STATE
  const [searchValue, setSearchValue] = useState("");
  // FUNCS
  const searchHandler = e => {
    e.preventDefault();
    dispatch(getTodoAsync(searchValue));
  };

  return (
    <div className={Style.divContainer}>
      <form className={Style.formDiv} onSubmit={searchHandler}>
        <input
          className={Style.divInput}
          type="text"
          defaultValue={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <ConfirmBtn type="submit" className={`${Style.button} do`}>
          Search
        </ConfirmBtn>
      </form>
      <ConfirmBtn onClick={() => dispatch(createTodo())} className={`${Style.create}  do`}>
        Create New Todo
      </ConfirmBtn>
    </div>
  );
};

export default AddToForm;
