import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./App.css";
import TodoList from "./components/todoList";
import database from "./firebase_init";
import { Button, TextField } from "@material-ui/core";

function App() {
  // state managment
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // hook to det data from database
  useEffect(() => {
    database
      .collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((Snapshot) => {
        setTodo(
          Snapshot.docs.map((todo) => ({ id: todo.id, todo: todo.data().todo }))
        );
      });
  }, []);

  // function to add todo to our database
  const Addtodo = (event) => {
    event.preventDefault();
    if (input !== "") {
      database.collection("todos").add({
        todo: input,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  // funciton to delete all todo one by one
  const deleteAll = () => {
    for (let i = 0; i < todos.length; i++) {
      database.collection("todos").doc(todos[i].id).delete();
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Here are the things TO-DO </h1>
      <form className="getinput">
        <TextField
          className="todo-input"
          id="standard-basic"
          label="Type Todo"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          className="form-btn"
          variant="outlined"
          type="submit"
          color="primary"
          size="large"
          onClick={Addtodo}
        >
          Add todo
        </Button>
      </form>
      <div className="todolist">
        <h3>TODOS</h3>
        {todos.map((todo) => (
          <TodoList text={todo} />
        ))}
      </div>
      <Button
        className="delete-all"
        color="secondary"
        variant="contained"
        onClick={deleteAll}
      >
        Delete All
      </Button>
    </div>
  );
}

export default App;
