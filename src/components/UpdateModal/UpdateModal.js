import React, { useState, useEffect } from "react";
// ---- REDUX ---- //
import { useDispatch, useSelector } from "react-redux";
import { cancelUpdate, updateTodoAsync } from "../../Redux/updateSlice/updateSlice";
// ---- COMPONENTS ---- //
import { ModalContainer } from "../../ModalContainer/ModalContainer";
import ConfirmBtn from "../../reuseable components/ConfirmBtn/ConfirmBtn";
// ---- STYLE ---- //
import Style from "./UpdateModal.module.css";

const UpdateModal = () => {
  // REDUX
  const dispatch = useDispatch();
  const { updatingModal, updateTodo } = useSelector(state => state.update);
  // STATE
  const [obj, setObj] = useState({});
  // FUNC
  const onSubmitHandler = e => {
    e.preventDefault();
    dispatch(updateTodoAsync(obj));
  };

  useEffect(() => {
    setObj(updateTodo);
  }, [updateTodo]);

  return (
    <>
      {updatingModal && (
        <ModalContainer h2={"Update todo"}>
          <form onSubmit={onSubmitHandler}>
            <label className={Style.inputLabel}>insert update</label>
            <input
              className={Style.ModalInput}
              type="text"
              value={obj.title ? obj.title : ""}
              onChange={e => setObj({ ...obj, title: e.target.value })}
            />
            <div className={Style.btnDiv}>
              <ConfirmBtn
                onClick={() => {
                  dispatch(updateTodoAsync(obj));
                }}
                className="do"
              >
                Update
              </ConfirmBtn>{" "}
              {""}
              {""}
              <ConfirmBtn onClick={() => dispatch(cancelUpdate())} className="delete">
                Cancel
              </ConfirmBtn>
            </div>
          </form>
        </ModalContainer>
      )}
    </>
  );
};

export default UpdateModal;
