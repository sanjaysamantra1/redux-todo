import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleToDo } from "../actions/actions";

export default function ToDo({toDo}) {
  const dispatch = useDispatch();

  const deleteMyTodo = (id) => {
    const actionObj = deleteTodo(id);
    dispatch(actionObj);
  };
  const toggleMyTodo = (id) => {
    const actionObj = toggleToDo(id);
    dispatch(actionObj);
  };
  return (
    <>
     <li>
      <span style={{textDecoration: toDo.completed ? 'line-through' : 'none'}}>
          {toDo.text}
       </span> &nbsp;
      <button onClick={()=>{deleteMyTodo(toDo.id)}}>DELETE</button> &nbsp;
      <button onClick={()=>{toggleMyTodo(toDo.id)}}>TOGGLE</button> &nbsp;
    </li>
    </>
  );
}
