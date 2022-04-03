import React, { useEffect } from "react";
// ---- REDUX ----//
import { useDispatch, useSelector } from "react-redux";
import { cancelModal, deleteTodoAsync } from "../../Redux/deleteSlice/deleteSlice";
// ---- COMPONENTS ---- //
import { ModalContainer } from "../../ModalContainer/ModalContainer";
import ConfirmBtn from "../../reuseable components/ConfirmBtn/ConfirmBtn";
// ---- STYLE ---- //
import Style from "./Modal.module.css";

const Modal = () => {
  // REDUX
  const dispatch = useDispatch();
  const { show, currentTodo } = useSelector(state => state.deleteTodo);
  // FUNCS
  const deleteHandler = () => {
    currentTodo && dispatch(deleteTodoAsync(currentTodo.id));
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);
  return (
    <>
      {show && (
        <ModalContainer h2={"Delete todo"}>
          <p>
            are you sure you want to delete this <span className={Style.modalTitle}>{currentTodo.title}</span>
          </p>
          <div className={Style.btnDiv}>
            <ConfirmBtn onClick={deleteHandler} className="delete">
              Delete
            </ConfirmBtn>{" "}
            {""}
            {""}
            <ConfirmBtn onClick={() => dispatch(cancelModal())} className="do">
              Cancel
            </ConfirmBtn>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default Modal;
