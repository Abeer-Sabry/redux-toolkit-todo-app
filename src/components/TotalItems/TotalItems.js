import React from "react";
import { useSelector } from "react-redux";

const TotalItems = () => {
  const { todoItems } = useSelector(state => state.todo);
  return <h4>TotalItems:{todoItems.length}</h4>;
};

export default TotalItems;
