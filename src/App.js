import React from "react";
import "./App.css";
import AddTodo from "./Components/AddToDo/AddTodo";
import ListTodo from "./Components/ListTodo/ListTodo";

function App() {
  return (
    <div className="App">
      <h1>Todo Application </h1>
      <br />

      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
