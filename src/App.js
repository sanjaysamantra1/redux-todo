import React from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

export default function App() {
  return (
    <>
      <ToDoList></ToDoList>
      ========================================
      <AddToDo></AddToDo>
    </>
  );
}
