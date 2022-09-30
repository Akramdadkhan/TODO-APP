import React from "react";
import "../components/todolist.css";
import { Button } from "@material-ui/core";
import database from "../firebase_init";

const TodoList = (props) => {
  return (
    <div className="todo" key={props.text.id}>
      <p>{props.text.todo}</p>
      <Button
        color="secondary"
        variant="outlined"
        onClick={(event) => {
          database.collection("todos").doc(props.text.id).delete();
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoList;
