import React, { useState } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { CancelCreateModal, postTodoAsync } from "../../Redux/postSlice/postSlice";
// ---- COMPONENTS ---- //
import { ModalContainer } from "../../ModalContainer/ModalContainer";
import ConfirmBtn from "../../reuseable components/ConfirmBtn/ConfirmBtn";
// ---- STYLE ---- //
import Style from "./CreateModal.module.css";

const CreateModal = () => {
  // STATE
  const [value, setValue] = useState("");
  // REDUX
  const { showCreateModal } = useSelector(state => state.post);
  const dispatch = useDispatch();
  // FUNC
  const onSubmitHandler = e => {
    e.preventDefault();
    value &&
      dispatch(
        postTodoAsync({
          title: value,
        })
      );
    setValue("");
  };
  return (
    <>
      {showCreateModal && (
        <ModalContainer ModalContainer h2={"Create Todo"}>
          <form onSubmit={onSubmitHandler}>
            <label className={Style.label}>Your Todo</label>
            <input className={Style.input} type="text" value={value} onChange={e => setValue(e.target.value)} />{" "}
            <div className={Style.divBtn}>
              <ConfirmBtn onClick={onSubmitHandler} className="do">
                Create
              </ConfirmBtn>
              <ConfirmBtn onClick={() => dispatch(CancelCreateModal())} className="delete">
                Cancel
              </ConfirmBtn>
            </div>
          </form>
        </ModalContainer>
      )}
    </>
  );
};

export default CreateModal;
